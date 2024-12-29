const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
  id: Number,
  title: String,
  number: String,
  description: String,
  downloadLink: String
});

const animeSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Series', 'Movie'],
    required: true
  },
  episodes: [episodeSchema],
  downloadLink: String, // For movies
  genre: [String],
  rating: String,
  year: String,
  status: {
    type: String,
    enum: ['Ongoing', 'Completed', 'Upcoming'],
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Anime', animeSchema);

