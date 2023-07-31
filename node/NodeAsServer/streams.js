const fs = require('fs');
const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url!='/'){
        return res.end();//responding with 'nothing'
    }
    // const file=fs.readFileSync("file.txt");
    // return res.end(file);
    // //but we'll not read complete file we'll use stream
    const readableStream=fs.createReadStream('file.txt');
    readableStream.on('data',(chuck)=>{
        res.write(chuck);
        readableStream.on('end',()=>{
            res.end();
        })
    });
    readableStream.on('error',(err)=>{
        console.log(err);
        res.statusCode=500;
        res.end('Internal Server Error');
    })

})

server.listen(3000,()=>{
    console.log('server started');
})

