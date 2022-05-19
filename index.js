const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

require('./models/dbConfig.js');
const postsRoute = require('./routes/postsController');
const bodyParser = require('body-parser');

app.use(cors({
  "origin": "*"
}))

app.use(bodyParser.json());

app.use('/posts', postsRoute);

app.listen(5500, console.log('ok'));