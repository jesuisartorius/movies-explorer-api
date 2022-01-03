const mongoose = require('mongoose');
const isURL = require('validator/lib/isURL');
const { INVALID_LINK_FORMAT } = require('../configs/messages');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  director: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
    length: 4,
  },
  description: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1500,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (v) => isURL(v),
      message: INVALID_LINK_FORMAT,
    },
  },
  trailer: {
    type: String,
    required: true,
    validate: {
      validator: (v) => isURL(v),
      message: INVALID_LINK_FORMAT,
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (v) => isURL(v),
      message: INVALID_LINK_FORMAT,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  nameEN: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
});

module.exports = mongoose.model('movie', movieSchema);
