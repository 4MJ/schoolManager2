var fs = require('fs');
var log = '';
fs.readFile('log.txt',(err,data)=>{
    if(err){

    }
    else{
        log = data;
        exports.data = log.toString();
    }
});
