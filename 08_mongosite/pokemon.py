''''
Pokedex json: stored as a dictionary with key pokemon
    - pokemon is stored as an array
url:
https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json
import:
We read the json data using json.load(<json_file>) and because we're only using results
in the collection and pokemon's value is an array, but we want what's in the array,
we used a for loop for each query in the array.
We used insert_one to put that data into the collection within the db.
'''

import json
import pymongo

SERVER_ADDR = "157.230.218.44"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection["BleepingRetinalings"]
collection = db["pokemon"]

#json_file=open("pokemon.json","r")
#data=json_file.read()

#gets information from the json
with open('pokemon.json') as f:
    collection.drop()
    data = json.load(f)

#only inserts the pokemon data into the collection
for i in data["pokemon"]:
    collection.insert_one(i)

#given the name of the pokemon (lowercase), returns the information on that pokemon
#basically just gives url and name from the db
def name(name):
    return list(collection.find({'name': name}))

def id(idnum):
    return list(collection.find({'id': idnum}))

def type(types):
    return list(collection.find({'type': types}))

def weaknesses(weak):
    return list(collection.find({'weaknesses': weak}))

#test
#print (name("Bulbasaur"))
#print (id(2))
#print (type("Fire"))
#print (weaknesses("Water"))
