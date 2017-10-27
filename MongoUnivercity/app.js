var express = require('express'),
app = express(),
engines = require('consolidate'),
MongoClient = require('mongodb').MongoClient,
assert = require('assert');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

MongoClient.connect('mongodb://52.187.19.241:27017/videos',function(err,db){
    
    assert.equal(null,err);
    console.log('Sucessfully logged inside the server');


        app.get('/', function(req, res) {
        res.render( 'index',{ name : "Templates" });
        });
        
        app.get('/Akhilesh',function(req,res){
           res.render('Home',{work:'Akhielsh'});   // keep take care of 1st parameter where you have to show the html page that is in view .
        });
        
        app.get('/alter',function(req,res){
            db.collection('movies').find({}).toArray(function(err,docs){
                res.render('AllToGether',{'movies':docs});
            });
        });

        app.use(function(req, res){
        res.sendStatus(404); 
        });
        
        var server = app.listen(4000, function() {
        var port = server.address().port;
        console.log('Express server listening on port %s', port);
        });

});


