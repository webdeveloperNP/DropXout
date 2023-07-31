const express = require('express');
//meaning->using require function we've included/imported express module
const server = express();//creating instance of express module/package
const port=5000;
server.get('/',(req,res)=>{
    //res.send("Hello World!");
    res.send("<h1>Hello !</h1>");
// NOte that this time we don't need to mention content-type like we did in case of build-in http module NOte:- Express will also generate status code and message for us, we don't need to do it manually;
// check->http://localhost:5000/ -> inspect->network->localhost->header. Also note that till now we've not created about page and if we try to access it '/about* it'll automatically give error:404 + message for us
});

server.listen(port,()=>{
    console.log(`listning to ${port}`)
})

// This app starts a server and listens on port ${port}(here 5000) for connections.
// The app responds with “Hello World!” for requests to the root URL (/) or route.
// For every other path, it will respond with a 404 Not Found.

