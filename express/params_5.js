const express=require('express');
const server=express();

server.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><a href="/api/phone">Single phone</a>')
})

// const phone=require('./data');
// server.get('/api/phone/1',(req,res)=>{
//     const single=phone.find((item)=>item.id===1)
//     res.json(single);
// })//till now we've hard coded the request ti id=1 only we need to change this and make it ti be the id send by user theough req(request)
const phone=require('./data');
server.get('/api/phone/:phoneID',(req,res)=>{
    console.log(req.params);
    const {phoneID}=req.params;
    console.log(phoneID);
    const single=phone.find((item)=>item.id===Number(phoneID))
    if(!single){
        res.status(404).send('Product not found');
        return;
    }//to handle requests whose id are not awailable
    res.json(single);
})//Now keep entering '/api/phone/1or2or3 in browser to get different responses

server.listen(3000,()=>{
    console.log('listening to port 3000');
})