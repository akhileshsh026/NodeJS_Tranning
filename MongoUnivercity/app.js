var express = require('express'),
 app = express();


 app.get('/',function(req,res){
    res.send('Hello Friend all good');
 });

 app.use(function(req,res){
       res.sendStatus(404);
 });

 var server = app.listen(8000,function(){
         // var port = server.address.port;
     console.log('server is listing at 8000');
 })