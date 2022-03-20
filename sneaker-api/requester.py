import requests
import json
from os import path

gender = ["men", "women", "child", "infant", "preschool", "toddler", "unisex", "youth"]



while(len(gender) > 1):
    for g in gender:
        if path.exists("adidas-{}.json".format(g)):
            gender.remove(g)

    print(gender)

    for g in gender:
        print("requesting adidas "+g)
        response = requests.get("https://www.thesneakerdatabase.com/api/getData?brand=Adidas&gender="+g)
        print(response.status_code)
        if response.status_code == 200:
            j = response.json()
            f = open("adidas-{}.json".format(g), "w")
            f.write(json.dumps(j))
            f.close()
            gender.remove(g)