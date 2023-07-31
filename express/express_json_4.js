const express=require('express');
const server = express();

// server.get('/',(req,res)=>{
//     res.json([
//         {
//             name:'abc',
//             age:'20'
//         },
//         {
//             name:'def',
//             age:21
//         }
//     ]);//sending array of objects
// })

// const phone=require('./data');
// server.get('/',(req,res)=>{
//      res.json(phone)
// })//sending data to client from a file

//Let's make above ex little better and give it real-wrold touch

server.get('/',(req,res)=>{
    res.send('<h1>Home page</h1> <a href ="/api/phone">Phone</a>')
})
// const phone=require('./data');
// server.get('/api/phone',(req,res)=>{
//     res.json(phone);
// })//sending all data to cliend on click on phone link

const phone=require('./data');
server.get('/api/phone',(req,res)=>{
    const part=phone.map((product)=>{
        const {id,name}=product;
        return(id,name);
    })
    res.json(part);
})
//sending partial data on click on phone url


const port=3000;
server.listen(port,()=>{
    console.log(`listening to ${port}`);
});