const express = require('express');
const authRouter = require('./auth');

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.send('Hello World');
})

indexRouter.use('/auth', authRouter);

module.exports = indexRouter
