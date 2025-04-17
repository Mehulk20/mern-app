const catchAsync = require('./../errorMiddeleWare/asyncErrorHandler');
const AppError = require('./../errorMiddeleWare/appClassErrorHandler');

exports.getAll = (Model, fields) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.find().select(fields);
    if (!doc) {
      return next(new AppError('select fields not found', 404));
    }

    res.status(200).json({
      status: 'success',
      data: doc,
    });
  });

exports.getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);
    if (!doc) {
      return next(new AppError('document not found', 404));
    }

    res.status(200).json({
      status: 'success',
      data: doc,
    });
  });
