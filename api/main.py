from datetime import datetime

from fastapi import FastAPI, Cookie, Depends
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import datetime
import uvicorn


from models import *
from helpers import *



app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://flexeo.es",
    "http://localhost.flexeo.es:3000",
    "http://api.flexeo.es"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


engine = create_engine('postgresql://flexeo:somosflexeros@server1.flexeo.es:5432/flexeo')
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
    product_to_insert = db_Product(user_id=user_id, product_id=uuid.uuid4(), deleted=False, **product.dict())
    result = db.add(product_to_insert)
    db.commit()
    return result

@app.get("/v1/product/{product_id}", response_model=Product) #response_model te da el formato del return que prefieras
def get_product_by_id(product_id : str, db: Session = Depends(get_db)):
    product = db.query(db_Product).filter_by(product_id = product_id).one()
    return product

@app.post("/v1/product/{product_id}/like")
def get_models(product_id: str, db: Session = Depends(get_db), auth : str | None = Cookie(None)):
    user_id = verify_jwt(auth)
    like = db_Like(like_id=str(uuid.uuid4()), user_id=user_id, product_id=product_id)
    db.add(like)
    db.commit()

@app.delete("/v1/product/{product_id}/like")
def get_models(product_id: str, db: Session = Depends(get_db), auth : str | None = Cookie(None)):
    user_id = verify_jwt(auth)
    like = db.query(db_Like).filter(db_Like.product_id==product_id and db_Like.user_id==user_id).one()
    db.delete(like)
    db.commit()


# Model

@app.get("/v1/model/{model_id}", response_model=Model) #response_model te da el formato del return que prefieras
def get_model_by_id(model_id : str):
    print("----------------- model " + str(model_id))
    session = Session()
    model = session.query(db_Model).filter_by(model_id = model_id).one()
    session.close()
    return model


@app.get("/v1/model")
def get_models(query: str, db: Session = Depends(get_db), auth : str | None = Cookie(None)):
    verify_jwt(auth)
    models = db.query(db_Model).filter(db_Model.name.contains(query)).limit(10).all()
    return models


# Registration

@app.get("/v1/me", response_model=User)
def me(auth: str = Cookie(None), db: Session = Depends(get_db)):
    user_id = verify_jwt(auth)
    user = db.query(db_User).filter(user_id=user_id).one()
    return user

@app.get("/v1/complete-registration", response_model=User)
def me(data: CompleteRegistration, auth: str = Cookie(None), db: Session = Depends(get_db)):
    user_id = verify_jwt(auth)
    user = db.query(db_User).filter(user_id=user_id).one()
    username_exists = db.query(db_User).filter(username=data.username).one_or_none()

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
        "expiry": (datetime.datetime.now()+datetime.timedelta(hours=3)).isoformat()
    }
    print(payload)
    encoded = jwt.encode(payload, "contraseña", algorithm="HS256")

    return GoogleLoginResponse(jwt=encoded)





if __name__ == "__main__":
    uvicorn.run("main:app", port=8080, reload=True, host='0.0.0.0')