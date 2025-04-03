const express = require('express');
const route = express.Router();
const authRoute = require('./AuthRoutes/index');
const adminRoute = require('./AdminRoutes/index');
const managerRoute = require('./ManagerRoutes/managerRoutes');

// Admin Routes
route.use('/auth', authRoute);

// Admin Routes
route.use('/admin', adminRoute);

// Manager Routes
route.use('/manager', managerRoute);

module.exports = route;