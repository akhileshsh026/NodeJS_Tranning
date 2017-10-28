var express = require('express'),
  app = express(),  // web framework for hanling routing request
  cons = require('consolidate');  // templeting liberary adopter for  express

  app.engine('html',cons.nunjuncks);
  app.set('view engine','html');
  app.set('views',__dirname +'/views');
  

  //handler for internal server error

  function errorHandler(err,req,res,next){
      console.error(err.message);
      console.error(err.stack);
      res.status(500);
      res.status(500).render('error_template',{error :err});
  };



  app.get('/:name',function(req,res,next){
      var name= req.params.name;
      var getp1 = req.params.getp1;
      var getp2 = req.params.getp2;
      res.render('ExpressHandlers',{name:name,getp1:getp1,getp2:getp2});
  });

  app.use(errorHandler);

    var server = app.listen(3000,function(){
    var port = server.address().port;
    console.log('Express server listing on port',port); 
  });