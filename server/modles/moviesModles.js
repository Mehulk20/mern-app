const mongoose = require('mongoose');

const slugify = require('slugify');

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'A movie must have a name'],
    unique: true,
  },
  duration: {
    type: String,
    require: [true, 'A movie must have a duration'],
  },
  releaseDate: {
    type: String,
    required: true,
  },
  genres: {
    type: [String],
    required: true,
  },
  languages: { type: [String], required: true },
  casts: [
    {
      actor: {
        type: String,
        required: true,
      },
      role: {
        type: String,
      },
    },
  ],
  boxOffice: {
    budget: {
      type: String, // Budget in USD
    },
    revenue: {
      type: String, // Revenue in USD
    },
  },
  rating: {
    type: Number,
    min: [1, 'Rating must be above 1.0'],
    max: [10, 'Rating must be below 10.0'],
  },
  coverImage: {
    type: String,
    require: [true, 'A cover image is required'],
  },
  description: { type: String, trim: true },
  images: [String],
});

const Movies = mongoose.model('Movies', movieSchema);

module.exports = Movies;
