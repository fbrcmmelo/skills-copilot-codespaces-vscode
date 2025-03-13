// Create Web Server
const express = require('express');
const app = express();
const port = 3000;

// Import comments
const comments = require('./comments');
// Import bodyParser
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get comment by id
app.get('/comments/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

// Create new comment
app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,
    body: req.body.body
  };
  comments.push(comment);
  res.json(comment);
});

// Update comment
app.put('/comments/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  if (comment) {
    comment.body = req.body.body;
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

// Delete comment
app.delete('/comments/:id', (req, res) => {
  const index = comments.findIndex((comment) => comment.id === parseInt(req.params.id));
  if (index !== -1) {
    comments.splice(index, 1);
    res.send('Comment deleted');
  } else {
    res.status(404).send('Comment not found');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});