const express = require('express');
const router = express.Router();
const {
  getAnimes,
  addAnime,
  updateAnime,
  deleteAnime,
  getAnimeById
} = require('../controllers/animeController');

// Get all animes (can be filtered by genre or status using query parameters)
router.get('/', getAnimes);

// Add a new anime
router.post('/', addAnime);

// Update an existing anime
router.patch('/:id', updateAnime);

// Delete an anime
router.delete('/:id', deleteAnime);
router.get('/:id', getAnimeById);

module.exports = router;

