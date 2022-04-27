from google.oauth2 import id_token
from google.auth.transport import requests

from starlette.exceptions import HTTPException
import uuid
from sqlalchemy.orm import Session
import jwt

from models import *

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

