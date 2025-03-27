const express = require('express');
const userRoute = express.Router();
const userController = require('../../controllers/UserController/userController');

userRoute.get('/', userController.allUser);

userRoute.post('/', userController.register);

module.exports = userRoute;