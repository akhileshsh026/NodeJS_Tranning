'use strict';

var http = require('http');
var express = require('express');
const fs = require('fs');

// const configJSON = fs.readFileSync('./config.json');

fs.readFile('./config.json','utf8',function(err,data){

    const config = JSON.parse(data);
    
    const app = express();
    
    app.use(express.static(config.webServer.folder));
    
    const httpServer = http.createServer(app);
    
    httpServer.listen(config.webServer.port,function(err){
        if(err)
            {
                console.log(err.message);
                return;
            }
    
        console.log(`server listing on ${config.webServer.port}`);
    })
});

console.log('reading the files aysnchrnosysoluy');

