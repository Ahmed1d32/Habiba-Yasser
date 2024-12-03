const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let dictionary = {
  "example": "A representative form or pattern.",
  "technology": "The application of scientific knowledge for practical purposes."
};

app.get('/word/:word', (req, res) => {
  const word = req.params.word.toLowerCase();
  if (dictionary[word]) {
    res.json({ word: word, definition: dictionary[word] });
  } else {
    res.status(404).send({ message: 'Word not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
