var MongoClient = require('mongodb').MongoClient,
   assert = require('assert');

  
MongoClient.connect('mongodb://52.187.19.241:27017/dimentionx',function(err,db){

 // The assert module provides a simple set of assertion tests that can be used to test invariants.
assert.equal(null,err);
console.log('SucessFully Connected to Server');

          // find docs in mongo
   db.collection('employes').find({}).toArray(function(err,docs){
          docs.forEach(function(doc){
            console.log(doc.name);
          });

          db.close();
   });

      console.log('find() colled');
})