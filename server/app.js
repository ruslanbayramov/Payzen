const express = require('express');

const app = express();
const userRouter = require('./routes/userRoutes');
const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('dev'));

app.use(express.json());
app.use(cors());
app.use('/api/v1/users', userRouter);

module.exports = app;
