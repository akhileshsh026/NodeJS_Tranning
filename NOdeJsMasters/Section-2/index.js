var http = require('http');
var url = require('url');

var server = http.createServer(function (req,res) {
    var parseurl = url.parse(req.url,true);
    var path = parseurl.pathname;
    var trimedPath = path.replace(/^\/+|\/+$/g,'');
    var method = req.method.toLowerCase();
    res.end('Hello World \n');
    console.log('Request receved in path: ' + trimedPath + ' With Method :' + method);
});

server.listen(3000,function () {
    console.log('Server is listenting at 3000');
    
});