import express from 'express';

import {BOOKS_NAMES} from '../src/helpers/configurations';

const app = express();
const port = 3001;

const minRating = 0;
const maxRating = 10;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Hexad app listening on port ${port}`);
});

const getRandomRating = () => (minRating + Math.random() * (maxRating - minRating)).toFixed(1);

// API end point to generate the books and its rating randomly..
app.get("/books", (req, res) => {
  var books = [];
    for (let i = 0; i <= BOOKS_NAMES.length - 1; i++) {
      books.push({
        bookName: BOOKS_NAMES[i],
        bookRating: getRandomRating()
      });
    }
    res.status(200).send(books);
});