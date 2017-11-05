var MongoClient = require('mongodb').MongoClient,
assert = require('assert');


MongoClient.connect('mongodb://52.187.19.241:27017/CrunchDB', function(err, db) {

assert.equal(err, null);
console.log("Successfully connected to MongoDB.");

var query = {"founded_year": 2010};

var cursor = db.collection('Companies').find(query);

var projections = {"number_of_employees":1,"name":1,"_id":0};  
cursor.project(projections); // or cursor.project({"number_of_employees":1,"name":1,"_id":0}); 

cursor.forEach(
    function(doc) {
        console.log(doc.name + " has " + doc.number_of_employees + " employees.");
    },
    function(err) {
        assert.equal(err, null);
        return db.close();
    }
);

});