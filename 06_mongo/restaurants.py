import pymongo
SERVER_ADDR = "142.93.6.251"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

def search_borough(borough):
	restaurants = db.restaurants.find({"borough": borough})
	for restaurant in restaurants:
		print(restaurant)
# search_borough("Brooklyn")

def search_zipcode(zipcode):
	restaurants = db.restaurants.find({"address.zipcode": str(zipcode)})
	for restaurant in restaurants:
		print(restaurant)
# search_zipcode(10282)

def search_zipcode_grade(zipcode, grade):
	restaurants = db.restaurants.find({'$and': [{"address.zipcode": str(zipcode)},{"grades.0.grade": grade}]})
	for restaurant in restaurants:
		print(restaurant)
# search_zipcode_grade(10282, "A")

def search_threshold(zipcode, score):
	restaurants = db.restaurants.find({'$and': [{"address.zipcode": str(zipcode)},{"grades.0.score":{ '$lt': score }}]});
	for restaurant in restaurants:
		print(restaurant)
# search_threshold(10282, 10)

def search_name_cuisine(name, cuisine):
	restaurants = db.restaurants.find({'$or': [{"name": name},{"cuisine": cuisine}]})
	for restaurant in restaurants:
		print(restaurant)
# search_name_cuisine("Dunkin Donuts", "Chinese")
