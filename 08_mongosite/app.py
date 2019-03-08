from flask import Flask, render_template, request
from pymongo import MongoClient
import json
app = Flask(__name__) # instantiates an instance of Flask

SERVER_ADDR = "142.93.57.60" # Jason's droplet
#SERVER_ADDR = "142.93.6.251" # Tina's droplet
#SERVER_ADDR = "157.230.218.44" # Emily's droplet

connection = MongoClient(SERVER_ADDR)
db = connection.BleepingRetinalings
collection = db.pokemons
with open("pokemon.json") as input:
    collection.drop()
    collection.insert_many(json.load(input)["pokemon"])

def reconnect(address):
    global connection
    global db
    global collection
    connection = MongoClient(address)
    db = connection.BleepingRetinalings
    collection = db.pokemons
    with open("pokemon.json") as input:
        collection.drop()
        collection.insert_many(json.load(input)["pokemon"])

@app.route("/", methods=["GET","POST"]) #Linking a function to a route
def index():
    global SERVER_ADDR
    result_list = []
    has_result = False
    query = ""
    if "submit" in request.args:
        if "type" in request.args:
            search_type = request.args.get("type").lower().capitalize()
            result_list = type(search_type)
            query = "For Pokemon with types: " + request.args.get("type")
        elif "weaknesses" in request.args:
            search_type = request.args.get("weaknesses").lower().capitalize()
            result_list = weaknesses(search_type)
            query = "For Pokemon with weaknesses: " + request.args.get("weaknesses")
        elif "height" in request.args:
            result_list = height(float(request.args.get("height")))
            query = "For Pokemon with heights: " + request.args.get("height") + " +/- 1 meter"
        elif "weight" in request.args:
            result_list = weight(float(request.args.get("weight")))
            query = "For Pokemon with weights: " + request.args.get("weight") + " +/- 1 kilogram"
        has_result = True
    elif "submit" in request.form:
        reconnect(request.form.get("ip_address"))
        SERVER_ADDR = request.form.get("ip_address")
    return render_template('index.html',result = result_list, display = has_result, addr=SERVER_ADDR, search = query)

def type(types):
    global collection
    return list(collection.find({'type': types}))

def weaknesses(weak):
    global collection
    return list(collection.find({'weaknesses': weak}))

def height(height):
    global collection
    all_pokemon = collection.find()
    output = []
    for pokemon in all_pokemon:
        num=float(pokemon["height"][:-2])
        if num>=height-1 and num<=height+1:
            output.append(pokemon)
    return output

def weight(weight):
    global collection
    all_pokemon = collection.find()
    output = []
    for pokemon in all_pokemon:
        num=float(pokemon["weight"][:-3])
        if num>=weight-1 and num<=weight+1:
            output.append(pokemon)
    return output

if __name__ == "__main__":
    app.debug = True
    app.run()
