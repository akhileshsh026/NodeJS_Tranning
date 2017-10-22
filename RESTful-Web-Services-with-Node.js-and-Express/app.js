var express = require("express");

var app = express();

var port = process.env.PORT || 3000;

var bookrouter = express.Router();

bookrouter.route('/Books')
  .get(function(req,res){
      var responsejson = {hello :"This is book APi"};

      res.json(responsejson);
  });
app.use('/api',bookrouter);

app.get('/',function(req,res){
        res.send('Welcome to my APi');
});

app.listen(port,function(err){
    console.log('server listing on port' + port);
})