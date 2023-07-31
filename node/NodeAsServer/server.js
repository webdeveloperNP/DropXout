const http = require('http');
/*console.log(http);//It'll return list of all 'methods' and 'status code'(codes that are returned when a particular activity is done eg: - 200:OK)
*/


// const server=http.createServer((req,res)=>{
//     console.log('Server started');
//     res.setHeader("Dummy","data");
// // Open browser->inspect->network->click on localhost in the response->a window will appear->search for 'response headers'-> here you will see content written in setHeader
//     //res.setHeader("content-type","text/html");
//     //res.end('This is response from server');
// // this tells that response be treated as html content, after doing this appearence of text and web browser background will change
    
// //res.end("<h1>This is response from server</h1>");//notice content look

// res.end('This is response from server');
// })


const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Home Page");
    }
    if(req.url==='/about'){
        res.end("About Page");
    }
    if(req.url==='/contact'){
        res.end("Contact Page");
    }
})

server.listen(3000,()=>{
    console.log('server bind to port 3000');
 })