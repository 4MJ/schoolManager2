
let fs = require('fs');

const http = require('http');
const hostname = '127.0.0.1';
const port = 2020;
const server = http.createServer((req,res)=>{
    res.setHeader('Content-type', 'Text/html');
    fs.readFile('./index.html', null, function(err,data){
        if(err){
            res.statusCode = 404;
            res.writeHead(404);
            res.write('file not found');
        }
        else{
            res.statusCode = 200;
            res.write(data)
        }
        res.end()
    });
    
    
});

server.listen(port,hostname, ()=>{
    console.log(`server is running at  http://${hostname}${port}/`)
});

const express = require('express');
const app = express();