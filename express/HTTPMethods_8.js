const express = require('express');
const server = express();

server.use(express.static('public'));

let books = [
    { id: 1, title: 'Atomic', author: 'James' },
    { id: 2, title: 'QWERTY', author: 'Sudha' }
]
server.get('/books', (req, res) => {
    res.json(books);
})
//.get is done to just see what data we're getting, our main focus is POST

//POST method
//we want the data filled in the 'form' to be sent to 'books' array when we click on 'Add book' button.
server.use(express.urlencoded({ extended: false }));
server.post('/books', (req, res) => {
    console.log(req.body)
    const newBook = {
        id: books.length + 1,
        title: req.body.title,//this is available throughname attribute of html
        author: req.body.author
    }
    books.push(newBook)
    //res.status(201).json(newBook);
    res.status(201).json(books);
})

server.listen(3000, () => {
    console.log('listening to port 3000');
})
