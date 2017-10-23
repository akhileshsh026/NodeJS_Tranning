var express = require("express"),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');


  var db = mongoose.connect('mongodb://localhost/booksAPI');

  var Book = require('./models/bookmodels');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

var bookRouter = require('./Routes/bookRoutes')(Book);


app.use('/api',bookRouter);

app.get('/',function(req,res){
        res.send('Welcome to my APi');
});

app.listen(port,function(err){
    console.log('server listing on port' + port);
})