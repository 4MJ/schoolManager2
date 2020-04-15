var fs = require('fs');
var event = require('events');
var eventEmitter = new event.EventEmitter();
var textData = '';

exports. writetoFile = (dataTowrite)=>{
    fs.readFile('log.txt',(err, data)=>{
        if(err){
            fs.writeFile('log.txt', dataTowrite, (err)=>{
                if(err){}
            });
        }
        else{
                let alldata = data.toString() + ',' + dataTowrite
            fs.writeFile('log.txt', alldata, (err)=>{
                if(err){}
            });
        }
    })
}