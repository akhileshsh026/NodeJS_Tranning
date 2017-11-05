var MongoClient = require('mongodb').MongoClient,
  assert = require('assert');   


MongoClient.connect('mongodb://52.187.19.241:27017/CrunchDB',function(err,db){
    assert.equal(err,null);
    console.log("Connected Sucessfully");

    var Query = {"category_code":"biotech"};
    var projection = {"name":1,"category_code":1,"_id":0};
    
    var Cursor = db.collection('Companies').find(Query);
    Cursor.project(projection); 

        Cursor.forEach(
                function(doc)
                {
                    console.log(doc.name+' is a '+doc.category_code+" Company.");
                },
                  function(err)
                  {
                      assert.equal(err,null);
                      return db.close();
                  }
    
             );
            
        
    });