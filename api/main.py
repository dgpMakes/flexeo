from datetime import datetime
from pyrsistent import v
from fastapi import FastAPI
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Boolean, DateTime
from sqlalchemy.dialects.postgresql import UUID

from sqlalchemy.orm import relationship
from sqlalchemy.orm import sessionmaker
from pydantic import BaseModel
import datetime
import uuid

app = FastAPI()

engine = create_engine('postgresql://flexeo:somosflexeros@server1.flexeo.es:5432/flexeo')
Session = sessionmaker(bind=engine)
Base = declarative_base()

@app.get("/v1/recent-products")
def get_products(num:int):
    products = conexion.execute("select * from product limit "+ str(num))
    lista = list()
    for p in products:
        print(str(p["price"]) + " " + str(p["size"]) + " " + p["description"])
        product = {"price":p["price"],
                   "size":p["size"],
                   "description":p["description"]}
        lista.append(product)

    print(lista)

    return {
        "datillos":lista
    }

@app.get("/v1/product/{product_id}")
def get_product_by_id(product_id : str):

    products = conexion.execute("select * from product where product_id='"+str(product_id)+"'")
    product_list = list()
    for p in products:
        print(str(p["price"]) + " " + str(p["size"]) + " " + p["description"])
        product = {"product_id":p["product_id"],
                   "model_id":p["model_id"],
                   "user_id":p["user_id"],
                   "price":p["price"],
                   "size":p["size"],
                   "description":p["description"],
                   "condition":p["condition"],
                   "are_sent":p["are_sent"],
                   "time":p["time"],
                   "booked_user_id":p["booked_user_id"],
                   "sold":p["sold"],
                   "deleted":p["deleted"]}
        product_list.append(product)
        

    return {
        "to_return":product_list
    }

# Pydantic
class Product(BaseModel):
    model_id: str
    user_id: str
    price: float
    size: float
    description: str
    condition: str
    are_sent: bool
    time: datetime.datetime
    booked_user_id: str | None = None
    sold: bool = False

    class Config:
        orm_mode = True

# SqlAlchemy
class db_Product(Base):
    __tablename__ = "product"
    product_id = Column(UUID(as_uuid=True), primary_key=True, index=True)
    model_id = Column(UUID(as_uuid=True))
    user_id = Column(UUID)
    price = Column(Integer)
    size = Column(Integer)
    time = Column(DateTime)
    description = Column(String)
    condition = Column(String)
    are_sent = Column(Boolean)
    booked_user_id = Column(String)
    sold = Column(Boolean)
    deleted = Column(Boolean)

@app.post("/v1/upload_product", response_model=Product) #Front should warn when everything is valid
def upload_product(product : Product):
    product_to_insert = db_Product(product_id=uuid.uuid4(), deleted=False, **product.dict())
    
    session = Session()
    result = session.add(product_to_insert)
    session.commit()
    return result
