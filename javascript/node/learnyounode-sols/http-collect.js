const http = require('http');

let text = "";

http.get(process.argv[2],(response)=>{
    response.setEncoding('utf8');
    response.on('data',(data)=>{
        text+=data;
    })
    response.on("end",()=>{
        console.log(text.length);
        console.log(text);
    })
});