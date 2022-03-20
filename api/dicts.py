
from os import listxattr
import datetime
from xmlrpc.client import boolean

sneaker1 = {
  "brand": "Adidas",
  "model": "21312312",
  "year": 2019,
}

sneaker2 = {
  "brand": "Nike",
  "model": "1192312",
  "year": 2002,
}

sneaker3 = {
  "brand": "Adidas",
  "model": "8887882",
  "year": 2020,
}

a_devolver = {
  "lista": [sneaker1, sneaker2, sneaker3],
  "tiempo": datetime.datetime.now()
}

def get_models(a, imprimir_doble_linea = False):
    for i in a_devolver["lista"]:
        print(i["model"])
        if imprimir_doble_linea:
          print()

get_models(imprimir_doble_linea=True, a="asd")