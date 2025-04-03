const express = require('express');
const managerRoute = express.Router();
const managerController = require('../../controllers/ManagerController/managerController');
const auth = require('../../middlewares/Auth');

managerRoute.get('/dashboard', auth(['admin','manager']), managerController.dashboard);

module.exports = managerRoute;