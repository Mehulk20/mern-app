const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const movieRouter = require('./routers/movieRouters');
const userRouter = require('./routers/userRouters');
const errorHandler = require('./errorMiddeleWare/errorHandler');
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/movies', movieRouter);
app.use('/api/v1/users', userRouter);
// app.use('/api/v1/users');

app.use(errorHandler);
module.exports = app;
