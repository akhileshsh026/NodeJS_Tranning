var http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder; 

var server = http.createServer(function (req,res) {
    var parseurl = url.parse(req.url,true);
    var path = parseurl.pathname;
    var trimedPath = path.replace(/^\/+|\/+$/g,'');
    var method = req.method.toLowerCase();
    // getting quesy string
    var queryString = parseurl.query;

    // get the headers as an object
    var headervar = req.headers;

    // getting payloads
    var decoders = new StringDecoder('utf-8');
    var buffer = '';
    
    req.on('data',function (data) {
       buffer += decoders.write(data); 
    });  // this is payload but what happens when its end , can be done by the follwoing event 
    req.on('end',function (end) {
        buffer += decoders.end(); 
        // the response shuold be under this event & even though there is no payload in the request this will work .
        res.end('Hello World \n');
        // console.log('Request receved in path: ' + trimedPath + ', With Method :' + method + ', With these query strings :' , queryString);
        console.log('Req receved with these payload : ' , buffer);
    });
});

server.listen(3000,function () {
    console.log('Server is listenting at 3000');
    
});