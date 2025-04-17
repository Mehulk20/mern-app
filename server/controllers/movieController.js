const Movies = require('./../modles/moviesModles');
const factory = require('./factoryController');
const catchAsync = require('./../errorMiddeleWare/asyncErrorHandler');

// exports.getAllMovies = catchAsync(async (req, res, next) => {
//   const movies = await Movies.find().select(
//     'name genres rating duration languages coverImage'
//   );
//   res.status(200).json({
//     status: 'success',
//     data: {
//       movies,
//     },
//   });
// });

exports.getAllMovies = factory.getAll(
  Movies,
  'id name rating releaseDate coverImage'
);

exports.getMovieInfo = factory.getAll(Movies);

exports.createMoviesEntry = catchAsync(async (req, res, next) => {
  const newMovies = await Movies.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      newMovies,
    },
  });
});

exports.getMovieById = factory.getOne(Movies);
