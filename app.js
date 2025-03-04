const express = require('express');
const indexRouter = require('./router/index');

const app = express();

app.use(indexRouter);

app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
})
