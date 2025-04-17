const express = require('express');
const router = express.Router();

const movieController = require('./../controllers/movieController');

router
  .route('/')
  .get(movieController.getAllMovies)
  .post(movieController.createMoviesEntry);

// router.route('/info').get(movieController);

router.route('/:id').get(movieController.getMovieById);

module.exports = router;
