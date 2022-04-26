from datetime import date, datetime
from itertools import product
from signal import pause
from tabnanny import check
from urllib.request import AbstractBasicAuthHandler
from fastapi import FastAPI, Cookie, Depends
from fastapi.middleware.cors import CORSMiddleware
from starlette.exceptions import HTTPException

import dateutil.parser
from psycopg2 import Date

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Boolean, DateTime, Date
from sqlalchemy.dialects.postgresql import UUID

from sqlalchemy.orm import relationship
from sqlalchemy.orm import sessionmaker
from pydantic import BaseModel
import datetime
import uuid
import uvicorn
from google.oauth2 import id_token
from google.auth.transport import requests
import jwt
import json



# Pydantic
class GoogleLoginResponse(BaseModel):
    jwt: str

class User(BaseModel):
    user_id: str
    email: str
    name: str
    surname: str
    address: str
    creation_date: datetime.date
    state: str

    class Config:
        orm_mode = True
        arbitrary_types_allowed = True

class Model(BaseModel):
    model_id: str
    api_id: str
    sku: str
    brand: str
    name: str
    colorway: str
    gender: str
    release_year: str
    retail_date: datetime.date
    retail_price: float | None = None
    estimated_market_value: float | None = None
    image_url: str | None = None

    class Config:
        orm_mode = True
        arbitrary_types_allowed = True

class UploadProduct(BaseModel):
    user_id: str
    model_id: str
    price: float
    size: float
    description: str
    condition: str
    are_sent: bool
    time: datetime.date
    booked_user_id: str | None = None
    sold: bool = False

    user: User
    model: Model

    class Config:
        orm_mode = True
        arbitrary_types_allowed = True

class Product(UploadProduct):
    product_id: str

class CompleteRegistration(BaseModel):
    name: str
    surname: str
    username: str
    address: str
    profile_picture: str


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
Session = sessionmaker(bind=engine)
Base = declarative_base()

def get_db():
    db = Session()
    try:
        yield db
    finally:
        db.close()

@app.get("/v1/recent-products", response_model=list)
def get_products(num:int = 10, db: Session = Depends(get_db)):
    products = db.query(db_Product).order_by(db_Product.time.desc()).limit(num).all()
    return products



@app.get("/v1/product/{product_id}", response_model=Product) #response_model te da el formato del return que prefieras
def get_product_by_id(product_id : str, db: Session = Depends(get_db)):
    product = db.query(db_Product).filter_by(product_id = product_id).one()
    return product

@app.get("/v1/model/{model_id}", response_model=Model) #response_model te da el formato del return que prefieras
def get_model_by_id(model_id : str):
    print("----------------- model " + str(model_id))
    session = Session()
    model = session.query(db_Model).filter_by(model_id = model_id).one()
    session.close()
    return model
    



# SqlAlchemy
class db_User(Base):
    __tablename__ = "user"
    user_id = Column(String, primary_key=True, index=True)
    email = Column(String)
    name = Column(String)
    surname = Column(String)
    address = Column(String)
    creation_date = Column(DateTime)
    registration_ip = Column(String)
    state = Column(String)

    products = relationship("db_Product", back_populates="user")

    class Config:
        orm_mode = True

class db_Product(Base):
    __tablename__ = "product"
    product_id = Column(String, primary_key=True, index=True)
    model_id = Column(String, ForeignKey("model.model_id"))
    user_id = Column(String, ForeignKey("user.user_id"))
    price = Column(Integer)
    size = Column(Integer)
    time = Column(DateTime)
    description = Column(String)
    condition = Column(String)
    are_sent = Column(Boolean)
    booked_user_id = Column(String)
    sold = Column(Boolean)
    deleted = Column(Boolean)

    user = relationship("db_User", back_populates="products")
    model = relationship("db_Model")

    class Config:
        orm_mode = True

class db_Model(Base):
    __tablename__ = "model"
    model_id = Column(String, primary_key=True, index=True)
    api_id = Column(String)
    sku = Column(String)
    brand = Column(String)
    name = Column(String)
    colorway = Column(String)
    gender = Column(String)
    release_year = Column(Integer)
    retail_date = Column(Date)
    retail_price = Column(Integer)
    estimated_market_value = Column(Integer)
    image_url = Column(String)

    class Config:
        orm_mode = True

class db_Like(Base):
    __tablename__ = "like"
    like_id = Column(String, primary_key=True)
    product_id = Column(String, ForeignKey("product.product_id"))
    user_id = Column(String, ForeignKey("user.user_id"))

    class Config:
        orm_mode = True

@app.post("/v1/upload-product", response_model=Product) #Front should warn when everything is valid
def upload_product(product : UploadProduct, auth: str = Cookie(None)):
    user_id = verify_jwt(auth)
    product_to_insert = db_Product(user_id=user_id, product_id=uuid.uuid4(), deleted=False, **product.dict())
    
    session = Session()
    result = session.add(product_to_insert)
    session.commit()
    session.close()
    return result

@app.get("/v1/recent-models", response_model=list)
def get_models(num : int = 10, auth : str | None = Cookie(None), db: Session = Depends(get_db)):
    print("auth cookie -> " + str(auth))
    session = Session()
    models = session.query(db_Model).order_by(db_Model.retail_date.desc()).limit(num).all()
    session.close()
    return models


@app.get("/v1/search-model")
def get_models(query: str, db: Session = Depends(get_db), auth : str | None = Cookie(None)):
    verify_jwt(auth)
    models = db.query(db_Model).filter(db_Model.name.contains(query)).limit(10).all()
    return models


@app.post("/v1/{product_id}/like")
def get_models(product_id: str, db: Session = Depends(get_db), auth : str | None = Cookie(None)):
    user_id = verify_jwt(auth)
    like = db_Like(like_id=str(uuid.uuid4()), user_id=user_id, product_id=product_id)
    db.add(like)
    db.commit()

class GoogleLoginPost(BaseModel):
    id_token: str


def google_login_user(token: str, db: Session) -> str:
    data = id_token.verify_oauth2_token(token, requests.Request(), "677485879058-rf5hin9fb0ljio7usi0379lijrq6i4ih.apps.googleusercontent.com")
    user_email = data["email"]
    user = db.query(db_User).filter(db_User.email == user_email).one_or_none()
    
    if user is None:
        # Create new user in database
        newUser = db_User(user_id=str(uuid.uuid4()), email=data["email"], state="onboarding")
        db.add(newUser)
        db.commit()
        db.refresh(newUser)
        user = newUser

    return user.user_id

def verify_jwt(token : str) -> str:
    dec = jwt.decode(token, "contraseña", algorithms=["HS256"])
    exp = dec["expiry"]
    if datetime.datetime.fromisoformat(exp) > datetime.datetime.now():
        return dec["user_id"]
    
    print("Invalid jwt -> " + token)
    raise HTTPException(status_code=500, detail="Authentication error!")


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