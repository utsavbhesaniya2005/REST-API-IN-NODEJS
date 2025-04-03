const express = require('express');
const adminRoute = express.Router();
const adminController = require('../../controllers/AdminController/adminController');
const auth = require('../../middlewares/Auth');

adminRoute.get('/dashboard', auth(['admin']), adminController.dashboard);

module.exports = adminRoute;