var express = require("express"),
  mongoose = require('mongoose');


  var db = mongoose.connect('mongodb://localhost/booksAPI');

  var Book = require('./models/bookmodels');

var app = express();

var port = process.env.PORT || 3000;

var bookrouter = express.Router();

bookrouter.route('/Books')
  .get(function(req,res){
      var query = {};
      if(req.query.title)
        {
          query.title = req.query.title;
        }
        Book.find(query,function(err,books){
        if(err)
            res.status(500).send(err);
        else
            res.json(books);
    });
    
  });

bookrouter.route('/Books/:bookID')
.get(function(req,res){

  Book.findById(req.params.bookID,function(err,book){
    if(err)
        res.status(500).send(err);
    else
        res.json(book); 
       });
       
      });       


app.use('/api',bookrouter);

app.get('/',function(req,res){
        res.send('Welcome to my APi');
});

app.listen(port,function(err){
    console.log('server listing on port' + port);
})