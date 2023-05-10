from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, DateTime, Date
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

from pydantic import BaseModel


import datetime



# Pydantic
class GoogleLoginResponse(BaseModel):
    jwt: str

class User(BaseModel):
    user_id: str
    email: str
    name: str | None
    surname: str | None
    address: str | None
    creation_date: datetime.date
    state: str

    class Config:
        orm_mode = True
        arbitrary_types_allowed = True

class Model(BaseModel):
    model_id: str
    # api_id: str
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
    model_id: str
    price: float
    size: float
    description: str
    condition: str
    are_sent: bool

    class Config:
        orm_mode = True
        arbitrary_types_allowed = True

class Product(UploadProduct):
    user_id: str
    product_id: str
    time: datetime.date
    booked_user_id: str | None = None
    sold: bool = False

    user: User
    model: Model

class CompleteRegistration(BaseModel):
    name: str
    surname: str
    username: str
    address: str
    profile_picture: str

class GoogleLoginPost(BaseModel):
    id_token: str

Base = declarative_base()

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
    # booked_user_id = Column(String, ForeignKey("user.user_id"))
    sold = Column(Boolean)
    deleted = Column(Boolean)

    user = relationship("db_User", back_populates="products")
    model = relationship("db_Model")

    class Config:
        orm_mode = True

class db_Model(Base):
    __tablename__ = "model"
    model_id = Column(String, primary_key=True, index=True)
    #api_id = Column(String)
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

# class db_Like(Base):
#     __tablename__ = "like"
#     like_id = Column(String, primary_key=True)
#     product_id = Column(String, ForeignKey("product.product_id"))
#     user_id = Column(String, ForeignKey("user.user_id"))
# 
#     class Config:
#         orm_mode = True
# 
# class db_Follow(Base):
#     __tablename__ = "follow"
#     follow_id = Column(String, primary_key=True)
#     follower = Column(String, ForeignKey("user.user_id"))
#     followed = Column(String, ForeignKey("user.user_id"))
# 
#     class Config:
#         orm_mode = True