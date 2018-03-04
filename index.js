const express = require('express');
const mongoose = require('mongoose');
const {mongoURI} = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect('mongodb://hehe:xixihehe@ds149905.mlab.com:49905/emaily-dev');
const app = express(mongoURI);

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);