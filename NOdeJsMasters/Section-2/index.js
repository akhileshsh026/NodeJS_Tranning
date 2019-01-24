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
        
        var chooseHandler = typeof(router[trimedPath]) !== router[trimedPath] : handlers.notFound;
        
        // constracut data obj to send to the handler
         var data {
             'trimedPath' : trimedPath,
             'queryString' : queryString,
             'method' : method,
             'headers' : headers,
             'payload' : buffer
         };

         // route the request to the handler specified in the router
         chooseHandler(data,function(statusCode,payload) {
             
         })

        res.end('Hello World \n');
        
        // console.log('Request receved in path: ' + trimedPath + ', With Method :' + method + ', With these query strings :' , queryString);
        // console.log('Req receved with these payload : ' , buffer);
    });
});

server.listen(3000,function () {
    console.log('Server is listenting at 3000');
    
});

//define handlers
var handlers = {};

// sample handler
handlers.sample = function(data,callback){
    // callback a http status code & Payload object
    callback(406),{'name':'My name is sampple handler'};
};

handlers.notFound = function (data,callback) {
    callback(404);
};
//define routes
 var router = {
  'sample' : handlers.sample
 };