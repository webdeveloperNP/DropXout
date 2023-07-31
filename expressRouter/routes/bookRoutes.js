const bookController = require('../controllers/bookController');
const express = require('express');
const router = express.Router();

router.get('/book', bookController.getBooks);
router.post('/books', bookController.createBook);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;