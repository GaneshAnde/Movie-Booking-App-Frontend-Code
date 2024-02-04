// controllers/artist.controller.js
const Artist = require('../models/artist.model');

const getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getArtistById = async (req, res) => {
  const { artistid } = req.params;

  try {
    const artist = await Artist.findOne({ artistid: parseInt(artistid) });

    if (!artist) {
      return res.status(404).json({ message: 'Artist not found' });
    }

    res.json(artist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllArtists,
  getArtistById,
};
