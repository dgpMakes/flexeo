from datetime import datetime
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Boolean, DateTime
from sqlalchemy.dialects.postgresql import UUID

from sqlalchemy.orm import relationship
from sqlalchemy.orm import sessionmaker
from pydantic import BaseModel
import datetime
import uuid
import uvicorn


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


app = FastAPI()

origins = [
    "*",
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

@app.get("/v1/recent-products", response_model=list[Product])
def get_products(num:int = 10):
    session = Session()
    products = session.query(db_Product).order_by(db_Product.time.desc()).limit(num).all()
    return products

@app.get("/v1/product/{product_id}", response_model=Product) #response_model te da el formato del return que prefieras
def get_product_by_id(product_id : str):
    session = Session()
    product = session.query(db_Product).filter_by(product_id = product_id).one()
    return product
    



# SqlAlchemy
class db_Product(Base):
    __tablename__ = "product"
    product_id = Column(UUID(as_uuid=True), primary_key=True, index=True)
    model_id = Column(UUID)
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

if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True, access_log=False, host='0.0.0.0')