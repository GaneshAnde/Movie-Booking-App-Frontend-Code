// controllers/genreController.js
const Genre = require('../models/genre.model');

const getGenreById = async (req, res) => {
  const { genreid } = req.params;

  try {
    const genre = await Genre.findOne({ genreid: parseInt(genreid) });

    if (!genre) {
      return res.status(404).json({ message: 'Genre not found' });
    }

    res.json(genre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getGenreById,
};
