var express = require('express'),
app = express(),
engines = require('consolidate');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
res.render( 'index',{ name : "Templates" });
});

app.get('/Akhilesh',function(req,res){
   res.render('Home',{work:'Akhielsh'});   // keep take care of 1st parameter where you have to show the html page that is in view .
});

app.use(function(req, res){
res.sendStatus(404); 
});

var server = app.listen(4000, function() {
var port = server.address().port;
console.log('Express server listening on port %s', port);
});
