const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="/api/phone">Single phone</a>')
})
// server.get('/api/v1/query', (req, res) => {
//     console.log(req.query);
//     res.send('hi')

// })//normal query string

const phone = require('./data');
server.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query;
    let sortedPhone = [...phone];
    if (search) { sortedPhone = sortedPhone.filter((product)=> { return product.name.startsWith(search)})
    sortedPhone=sortedPhone.slice(0,Number(limit))
    res.json(sortedPhone);return;}
    res.send("Product not found");


})

server.listen(3000, () => {
    console.log('listening to port 3000');
})