const http = require('http');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000; // You can choose any port you prefer

// Mongoose Connection
mongoose.connect('mongodb://127.0.0.1:27017/moviesdb', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Dynamic Routes
app.get('/movies', (req, res) => {
  res.send('All Movies Data in JSON format from Mongo DB');
});

app.get('/genres', (req, res) => {
  res.send('All Genres Data in JSON format from Mongo DB');
});

app.get('/artists', (req, res) => {
  res.send('All Artists Data in JSON format from Mongo DB');
});

// Create HTTP server and listen on the specified port
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
