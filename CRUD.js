Hyerterminal Mongod

another Mongo

show dbs
use ShopDB
show dbs
//Create 
db.products.insertOne({_id:1,name:"Pen",price: 10})

show collections

//Read
db.products.find()

db.products.find({_id:1})

db.products.find({price:{gt:1}})

db.products.find({_id:1},{name:1})

//Update

db.products.updateOne({_id:1},{$set:{stock:32}})

//Delete
db.products.deleteOne({_id:1})