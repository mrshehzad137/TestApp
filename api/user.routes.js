
const express = require("express");
const UserRouter = express.Router();
const UserController = require('./user.controller');

UserRouter.post('/signup',UserController.registerUser);

UserRouter.post('/signin',UserController.signinUser);

UserRouter.post('/book', UserController.book);

UserRouter.put('/updateProfile', UserController.updateProfile);

UserRouter.put('/forgetPassword', UserController.forgetPassword);

module.exports = UserRouter;