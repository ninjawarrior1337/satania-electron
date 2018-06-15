import requests as rq

with open("test.txt") as x:
    print(rq.post("http://files.treelar.com/phpfilereciver/", data=[("data", x.read())]))