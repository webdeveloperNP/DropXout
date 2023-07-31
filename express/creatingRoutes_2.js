const express = require('express');
const server = express();
const port=5000;
server.get('/',(req,res)=>{
    res.send("<h1>Home route!</h1>");
});
server.get('/contact',(req,res)=>{
    res.send("<h1>Contact route!</h1>");
});
server.get('/about',(req,res)=>{
    res.send("<h1>About route!</h1>");
});
//to send a file we must know it's path, that we can obtain thru build-in 'path' module
const path=require('path');
server.get('/readfile',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
});

//sending json response
server.get('/json',(req,res)=>{
    res.json([
        {name:'john',age:20},{name:'harry',age:22}
    ])
});
//to handle requests to non exiting routes, we use 'all', it handle all kind of http requests be it get/put/post...
server.all('*',(req,res)=>{
    res.send("Route doesn't exist");
})


server.listen(port,()=>{
    console.log(`listning to ${port}`)
})