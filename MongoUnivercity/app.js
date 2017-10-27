var express = require('express'),
    app = express(),
    engines = require('consolidate');  // is for templete engine rest all things taken acre by this .

    app.engine('html',engines.nunjucks);
    app.set('view engine','html');
    app.set('views',__dirname + '/views');


    app.get('/',function (req,res){
                 res.render('hello ' + {'name': 'templetes' });
        })

    app.get(function (req,res) {
         res.sendStatus(404)
    })


 var server = app.listen(8000,function(){
     var port = server.address.port;
     console.log('server is listing at ' + port);
 })