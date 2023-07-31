const express=require('express');
const server=express();
server.use(express.json());


const bookRoutes=require('./routes/bookRoutes');

server.use('/',bookRoutes);


server.listen(3000,()=>{
    console.log('server running');
})