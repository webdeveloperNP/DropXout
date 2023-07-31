const express = require('express');
const server = express();


let books = [
    { id: 1, title: 'Atomic', author: 'James' },
    { id: 2, title: 'QWERTY', author: 'Sudha' },
]
//GET Request
server.get('/books', (req, res) => {
    res.json(books);
})
//POST Request

server.use(express.json());
//middelevare to pass jason body because to send jason you need a kind of middlevare which is body parser
server.post('/books', (req, res) => {
    console.log(req.body);
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).json(books);
    //res.send(req.body);
})
//PUT Request
server.put('/books/:id', (req, res) => {
    //we'll update data based on id recieved from client
    const id = parseInt(req.params.id);
    const updatedBook = req.body;
    const index = books.findIndex(book => book.id === id);
    //above stmt means find the index of that book object which we want to update(bcz books are stored in the form of array of objects) on the basis of the id of book.
    //this will give us a  positive index value if book with the id provided by client in url exist

    if (index !== -1) {
        books[index] = { ...books[index], ...updatedBook };//swapping values
        res.json(books[index]);
    }
    else {
        res.status(404).json({ error: 'book not found' });
    }

})
//DELETE Request
server.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        const deletedBook = books[index];
        books.splice(index, 1);
        res.json(deletedBook);
    }
    else {
        res.status(404).json({ error: 'book not found' });
    }

})



server.listen(3000, () => {
    console.log('server running');
})