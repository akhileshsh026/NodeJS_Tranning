var http = require('http');
var url = require('url');

var server = http.createServer(function (req,res) {
    var parseurl = url.parse(req.url,true);
    var path = parseurl.pathname;
    var trimedPath = path.replace(/^\/+|\/+$/g,'');
    var method = req.method.toLowerCase();
    // getting quesy string
    var queryString = parseurl.query;

    res.end('Hello World \n');
    console.log('Request receved in path: ' + trimedPath + ', With Method :' + method + ', With these query strings :' , queryString);
});

server.listen(3000,function () {
    console.log('Server is listenting at 3000');
    
});