# Team friends - Tina Wong, Jeffrey Wu
# SoftDev2 pd7
# K07 -- Import/Export Bank
# 2019-03-05

'''
GovTrack's API on Current US Senators
This JSON file contains information about each current senator, including their name, state, party, contact information, social media links, and rank.
Raw Data Link: https://www.govtrack.us/api/v2/role?current=true&role_type=senator
Import Mechanism:
    Call the function import_json(). This will read the json file and insert the objects into the database,
    which removes the meta information:
         "meta": {
          "limit": 100,
          "offset": 0,
          "total_count": 100
         }
    After everything is successfully imported, comment out the import_json() function so it is only imported once.
'''

import pymongo
import json

SERVER_ADDR = "142.93.6.251" # Tina's droplet
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.friends
collection = db.senators

def import_json():
    f = open("senators.json","r")
    data = json.loads(f.read())
    f.close()

    collection.insert_many(data["objects"])
# import_json()

def search_current_members():
    senators = db.senators.find({"current": bool('true')})
    for senator in senators:
        print(senator)
# search_current_members()

def search_senator(sen):
    sen = sen.split(' ')
    senators = db.senators.find({'$and': [{"person.firstname": sen[0]},{'person.lastname': sen[1]}]})
    for senator in senators:
        print(senator)
# search_senator("Jacky Rosen")

def search_state(state):
    senators = db.senators.find({"state": state})
    for senator in senators:
        print(senator)
# search_state("NY")

def search_party_gender(party, gender):
    senators = db.senators.find({'$and': [{"party": party},{'person.gender': gender}]})
    for senator in senators:
        print(senator)
# search_party_gender("Republican", "female")

def search_cspanid(cspanid):
    senators = db.senators.find({"person.cspanid": {'$lt': cspanid }})
    for senator in senators:
        print(senator)
# search_cspanid(104738)
