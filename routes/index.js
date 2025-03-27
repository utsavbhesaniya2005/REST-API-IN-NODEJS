const express = require('express');
const route = express.Router();
const userRoute = require('./UserRoutes/index');

route.use('/user', userRoute);

module.exports = route;