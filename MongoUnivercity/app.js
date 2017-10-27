var MongoClient = require('mongodb').MongoClient,
   assert = require('assert');

  
MongoClient.connect('mongodb://localhost:27017/video',function(err,db){

 // The assert module provides a simple set of assertion tests that can be used to test invariants.
assert.equal(null,err);
console.log('SucessFully Connected to Server');

          // find docs in mongo
   db.collection('movies').find({}).toArray(function(err,docs){
          docs.forEach(function(doc){
            console.log(doc.title);
          });

          db.close();
   });

      console.log('find() colled');
})