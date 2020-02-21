const express = require('express');
const router = express.Router('');
const UserController = require('../controller/UserController.js');

router.post('/login',UserController.login);

router.post('/signup',UserController.signup);

router.get('/showdata',UserController.showdata);

module.exports = router;