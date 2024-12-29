const Anime = require('../models/animeModel');

// Get all animes
const getAnimes = async (req, res) => {
  try {
    const { genre } = req.query;
    let query = {};
    
    if (genre) {
      query.genre = genre;
    }
    
    const animes = await Anime.find(query);
    res.status(200).json(animes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new anime
const addAnime = async (req, res) => {
  try {
    const anime = await Anime.create(req.body);
    res.status(201).json(anime);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an anime
const updateAnime = async (req, res) => {
  try {
    const anime = await Anime.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (!anime) {
      return res.status(404).json({ message: 'Anime not found' });
    }
    res.status(200).json(anime);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an anime
const deleteAnime = async (req, res) => {
  try {
    const anime = await Anime.findOneAndDelete({ id: req.params.id });
    if (!anime) {
      return res.status(404).json({ message: 'Anime not found' });
    }
    res.status(200).json({ message: 'Anime deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get a single anime by ID
const getAnimeById = async (req, res) => {
  try {
    const anime = await Anime.findOne({ id: req.params.id });
    if (!anime) {
      return res.status(404).json({ message: 'Anime not found' });
    }
    res.status(200).json(anime);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAnimes,
  addAnime,
  updateAnime,
  getAnimeById,
  deleteAnime
};

