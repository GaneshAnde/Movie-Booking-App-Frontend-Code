// routes/artist.routes.js
const express = require('express');
const artistController = require('../controllers/artist.controller');

const router = express.Router();

// Get all artists
router.get('/', artistController.getAllArtists);

// Get artist by artistid
router.get('/:artistid', artistController.getArtistById);

module.exports = router;
