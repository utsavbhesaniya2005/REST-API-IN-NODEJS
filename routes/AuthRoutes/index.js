const express = require('express');
const authRoute = express.Router();
const authController = require('../../controllers/AuthController/authController');

authRoute.get('/', authController.allUser);

authRoute.post('/register', authController.register);

authRoute.post('/login', authController.login);

module.exports = authRoute;