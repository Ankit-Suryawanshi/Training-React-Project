const express = require('express');
const router = express.Router('');
const UserController = require('../controller/UserController.js');

router.post('/login',UserController.login);

router.post('/signup',UserController.signup);

router.get('/showdata/:token',UserController.showdata);

router.delete('/deletedata/:token',UserController.deletedata);

router.post('/updatedata',UserController.updatedata);

module.exports = router;