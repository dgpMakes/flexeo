from datetime import datetime

from fastapi import FastAPI, Cookie, Depends
from fastapi.middleware.cors import CORSMiddleware
from httplib2 import Http, HttpLib2Error

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import datetime
import uvicorn


from models import *
from helpers import *



app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://flexeo.dgpmakes.com",
    "http://localhost.flexeo.dgpmakes.com:3000",
    "http://api.flexeo.dgpmakes.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


engine = create_engine('postgresql://flexeo:somosflexeros@server1.flexeo.dgpmakes.com:5432/flexeo')
SessionMaker: Session = sessionmaker(bind=engine)

def get_db():
    db = SessionMaker()
    try:
        yield db
    finally:
        db.close()


# Product

@app.get("/v1/product", response_model=list[Product])
def get_products(num:int = 10, db: Session = Depends(get_db)):
    products = db.query(db_Product).order_by(db_Product.time.desc()).limit(num).all()
    return products

@app.post("/v1/product", response_model=Product) #Front should warn when everything is valid
def upload_product(product : UploadProduct, auth: str = Cookie(None), db: Session = Depends(get_db)):
    user_id = verify_jwt(auth)
    product_to_insert = db_Product(user_id=user_id, product_id=uuid.uuid4(), deleted=False, time=datetime.datetime.now(), **product.dict())
    result = db.add(product_to_insert)
    db.commit()
    return result

@app.get("/v1/product/{product_id}", response_model=Product) #response_model te da el formato del return que prefieras
def get_product_by_id(product_id : str, db: Session = Depends(get_db)):
    product = db.query(db_Product).filter_by(product_id = product_id, deleted = False).one()
    return product

@app.delete("/v1/product/{product_id}", response_model=Product) #response_model te da el formato del return que prefieras
def get_product_by_id(product_id : str, auth: str = Cookie(None), db: Session = Depends(get_db)):
    user_id = verify_jwt(auth)
    product: db_Product = db.query(db_Product).filter_by(db_Product.product_id == product_id).one()
    if product.user_id != user_id:
        raise HTTPException(500, "This is not your product")
    
    product.deleted = True
    db.commit()

@app.post("/v1/like/{product_id}")
def like_product(product_id: str, db: Session = Depends(get_db), auth : str | None = Cookie(None)):
    user_id = verify_jwt(auth)
    like = db_Like(like_id=str(uuid.uuid4()), user_id=user_id, product_id=product_id)
    db.add(like)
    db.commit()

@app.delete("/v1/like/{product_id}")
def unlike_product(product_id: str, db: Session = Depends(get_db), auth : str | None = Cookie(None)):
    user_id = verify_jwt(auth)
    like = db.query(db_Like).filter(db_Like.product_id==product_id and db_Like.user_id==user_id).one()
    db.delete(like)
    db.commit()


# Follow

@app.post("/v1/follow/{follow_user_id}")
def like_product(follow_user_id: str, db: Session = Depends(get_db), auth : str | None = Cookie(None)):
    user_id = verify_jwt(auth)

    # Check not self following
    if user_id == follow_user_id:
        raise HTTPException(500, "You cannot follow yorself")

    f = db.query(db_Follow).filter_by(follower=user_id, followed=follow_user_id).one_or_none()
    if f != None:
        # Already following, return without error
        return

    # Create follow relation
    follow = db_Follow(follow_id=str(uuid.uuid4()), follower=user_id, followed=follow_user_id)
    db.add(follow)
    db.commit()


# Model

@app.get("/v1/model/{model_id}", response_model=Model) #response_model te da el formato del return que prefieras
def get_model_by_id(model_id : str, db: Session = Depends(get_db)):
    print("----------------- model " + str(model_id))
    model = db.query(db_Model).filter_by(model_id = model_id).one()
    return model


@app.get("/v1/model", response_model=list[Model])
def get_models(query: str = None, db: Session = Depends(get_db), auth : str | None = Cookie(None)):
    if query == None:
        models = db.query(db_Model).limit(10).all()
        return models
    
    verify_jwt(auth)
    models = db.query(db_Model).filter(db_Model.name.contains(query)).limit(10).all()
    return models


# Registration

@app.get("/v1/me", response_model=User)
def me(auth: str = Cookie(None), db: Session = Depends(get_db)):
    user_id = verify_jwt(auth)
    user = db.query(db_User).filter(db_User.user_id==user_id).one()
    return user

@app.get("/v1/complete-onboarding", response_model=User)
def complete_onboarding(data: CompleteRegistration, auth: str = Cookie(None), db: Session = Depends(get_db)):
    user_id = verify_jwt(auth)
    user = db.query(db_User).filter_by(user_id=user_id).one()
    username_exists = db.query(db_User).filter_by(username=data.username).one_or_none()

    if user.state == "onboarding" and username_exists is None:
        user.name = data.name
        user.surname = data.surname
        user.address = data.address
        user.username = data.username
        user.state = "normal"
        # Subir imagen a s3
        db.commit()
    

@app.post("/v1/google-login", response_model=GoogleLoginResponse) #response_model te da el formato del return que prefieras
def google_login(googleLogin : GoogleLoginPost, db: Session = Depends(get_db)):
    user_id = google_login_user(googleLogin.id_token, db)

    payload = {
        "user_id": user_id,
        "expiry": (datetime.datetime.now()+datetime.timedelta(days=3)).isoformat()
    }
    print(payload)
    encoded = jwt.encode(payload, "contraseña", algorithm="HS256")

    return GoogleLoginResponse(jwt=encoded)



if __name__ == "__main__":
    uvicorn.run("main:app", port=8080, reload=True, host='0.0.0.0')