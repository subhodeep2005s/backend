const express = require('express');
const router = express.Router();
const {
  getAnimes,
  addAnime,
  updateAnime,
  deleteAnime,
  getAnimeById,
  checkAppStatus
  
} = require('../controllers/animeController');

// Get all animes (can be filtered by genre or status using query parameters)
router.get('/', getAnimes);

// Add a new anime
router.post('/', addAnime);
// Check app status
router.get('/app', checkAppStatus);

// Update an existing anime
router.patch('/:id', updateAnime);

// Delete an anime
router.delete('/:id', deleteAnime);
router.get('/:id', getAnimeById);

module.exports = router;

