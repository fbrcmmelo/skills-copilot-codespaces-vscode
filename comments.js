// Create a web Server
const express = require('express');
const app = express();

// Create a GET route that returns all comments
app.get('/comments', (req, res) => {
  res.send('GET request to the homepage')
});

// Create a POST route that creates a new comment
app.post('/comments', (req, res) => {
  res.send('POST request to the homepage')
});

// Create a PUT route that updates a comment
app.put('/comments/:id', (req, res) => {
  res.send('PUT request to the homepage')
});

// Create a DELETE route that deletes a comment
app.delete('/comments/:id', (req, res) => {
  res.send('DELETE request to the homepage')
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// End of Path: comments.js