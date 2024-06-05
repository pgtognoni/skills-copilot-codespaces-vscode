// Create web server
// Run the server
// Create a route with a callback function
// Create a POST route with a callback function
// Parse the request body
// Create a new comment
// Push the new comment to the comments array
// Send the new comment as a response
// Create a DELETE route with a callback function
// Parse the request parameters
// Find the comment by ID
// Delete the comment
// Send a response
// Create a PUT route with a callback function
// Parse the request parameters
// Parse the request body
// Find the comment by ID
// Update the comment
// Send a response

// Path: comments.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log('Server started');
});

const comments = [
  { id: 1, body: 'Hello, world!' },
  { id: 2, body: 'This is a comment' },
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const body = req.body.body;
  const comment = { id: comments.length + 1, body: body };
  comments.push(comment);
  res.json(comment);
});

app.delete('/comments/:id', (req, res) => {
  const commentId = req.params.id;
  const comment = comments.find((comment) => comment.id == commentId);
  const index = comments.indexOf(comment);
  comments.splice(index, 1);
  res.json(comment);
});

app.put('/comments/:id', (req, res) => {
  const commentId = req.params.id;
  const comment = comments.find((comment) => comment.id == commentId);
  comment.body = req.body.body;
  res.json(comment);
});

// Path: index.js
// Import the comments.js file
// Use the comments.js file as a middleware
// Create a route to handle all requests
// Send a response

// Path: index.js
const express = require('express');
const app = express();
const comments = require('./comments');

app.use('/comments', comments);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
