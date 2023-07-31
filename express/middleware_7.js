const express=require('express');
const server=express();

const logger=(req,res,next)=>{
     console.log(`Date : ${new Date()} , Request Method : ${req.method} , Request URL : ${req.url}`);
     next();//next() here means, once th log is done we'll call next middleware in the stack
}

// server.use(logger);//this 'use' method adds logger middleware to the middleware stack of express app

// //NOw go to thunder client and send get request, you,ll get response on console, try changing url to new url say (say http://localhost:3000/api/auth) , data on console will change accordingly

// server.get('/',(req,res)=>{
//     res.send('Home');
// });
// server.get('/about',(req,res)=>{
//     res.send('About');
// });
// server.get('/contact',(req,res)=>{
//     res.send('Contact');
// });


// server.use('/contact',logger);
// //to only use logger for a particular url say when contact page is accessed
// server.get('/',(req,res)=>{
//     res.send('Home');
// });
// server.get('/about',(req,res)=>{
//     res.send('About');
// });
// server.get('/contact',(req,res)=>{
//     res.send('Contact');
// });


//creating multiple middle-wares
const authorize=(req,res,next)=>{
    console.log('Second middleware');
    next();
}
//server.use([authorize,logger]);//to use multiple middlewares we make array of them
server.use([logger,authorize]);//order of mentioning middle ware depends upon how we want to use them

server.get('/',(req,res)=>{
    res.send('Home');
});
server.get('/about',(req,res)=>{
    res.send('About');
});
server.get('/contact',(req,res)=>{
    res.send('Contact');
});



const port=3000;
server.listen(3000,()=>{
    console.log(`listening to ${port}`);
})