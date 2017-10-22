'use strict';

var http = require('http');
var express = require('express');

const app = express();

app.use(express.static('www'));

const httpServer = http.createServer(app);

httpServer.listen(3000,function(err){
    if(err)
        {
            console.log(err.message);
            return;
        }

    console.log('server listing on 3000');
})