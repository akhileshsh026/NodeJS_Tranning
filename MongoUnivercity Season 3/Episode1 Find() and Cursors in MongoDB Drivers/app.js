var MongoClient = require('mongodb').MongoClient,
  assert = require('assert');   


MongoClient.connect('mongodb://52.187.19.241:27017/CrunchDB',function(err,db){
    assert.equal(err,null);
    console.log("Connected Sucessfully");

    var Query = {"category_code":"biotech"};

    db.collection('Companies').find(Query).toArray(function(err,docs){
         
        assert.equal(err,null);
        assert.notEqual(docs.length,0);

        docs.forEach(function(doc){
            console.log(doc.name+'is a'+doc.category_code+" Company.");
        });
            
        db.close();
    });
});