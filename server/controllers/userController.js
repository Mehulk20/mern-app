const Users = require('./../modles/userModle');
const catchAsync = require('./../errorMiddeleWare/asyncErrorHandler');

exports.getUsers = catchAsync(async (req, res, next) => {
  const users = await Users.find();

  res.status(200).json({
    status: 'success',
    data: {
      users,
    },
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  const newUser = await Users.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      newUser,
    },
  });
});

exports.getUserById = catchAsync(async (req, res, next) => {
  const users = await Users.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      users,
    },
  });
});
