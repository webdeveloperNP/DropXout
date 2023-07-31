const express=require('express');
const morgan = require('morgan');
const server=express();

const logger =require('morgan');

//server.use(morgan("dev"));
//'dev'/'tiny' are different methods that'll log different data on console
//dev returns:- HTTP method, url status code response time

//server.use(morgan('short'));
//short will give remote-address,HTTP method, url, http-status

server.use(morgan('tiny'));

server.get('/',(req,res)=>{
    res.send('Home');
});
server.get('/about',(req,res)=>{
    res.send('About');
});
server.get('/contact',(req,res)=>{
    res.send('Contact');
});

server.listen(3000,()=>{
    console.log('listening to port 3000');
})