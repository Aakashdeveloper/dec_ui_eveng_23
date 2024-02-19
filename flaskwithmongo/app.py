from flask import Flask,jsonify,request
from pymongo import MongoClient
from dotenv import load_dotenv
import os
load_dotenv()

app = Flask(__name__)
# app.config['MONGO_URL'] = os.getenv('MONGO_URL')
client = MongoClient(os.getenv('MONGO_URL'))
db = client["Aprnode"]

@app.route('/')
def catgeory():
    products = list(db["users"].find({}, {'_id': 0}))  # Exclude _id field from the response
    return jsonify(products)

@app.route('/insert',methods=["POST"])
def insert_cat():
    data = request.json
    insertdata = db["users"].insert_one(data)
    return jsonify({"inserted_id": str(insertdata.inserted_id)})


app.run(port=3000)



