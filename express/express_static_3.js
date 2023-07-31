const express=require('express');
const server=express();
const path = require('path');

//sending static website to user as response
// server.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'profile','index.html'));
// })
//If we send it this way we can notice that only 'blog3.html' is sent, rest of the files like css/images are not sent.
//To overcome this we use 'express.static' as--
server.use(express.static('profile'));//whenever we write server.use it means we are going to use a middleware. 'express.static' is a middleware.
//express.static allows us to simply provide the directory name and it will send all files to the client



const port=3000;
server.listen(port,()=>{
    console.log(`server running at port ${port}`);
})