from urllib import request
import boto3
import os
import requests
import json
import uuid

def upload_image(name: str, image: bytes):
    s3 = boto3.resource('s3',
                    endpoint_url='https://s3.us-west-004.backblazeb2.com',
                    aws_access_key_id=os.getenv("B2_KEY_ID"),
                    aws_secret_access_key=os.getenv("B2_APP_KEY"))

    object = s3.Object('flexeo', name)
    object.put(Body=image)

    
def get_image(url: str) -> bytes:
    return requests.get(url).content



if __name__ == "__main__":
    f = open("Asics.json", "r")
    data = json.load(f)

    for sneaker in data["data"][:20]:
        sneaker_id = str(uuid.uuidv4())
        

        img = get_image(sneaker["image"]["original"])
        upload_image(sneaker["sku"] + ".png", img)
        print("Uploaded " + sneaker["sku"])

