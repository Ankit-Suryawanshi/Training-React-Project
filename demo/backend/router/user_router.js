const express = require('express');
const router = express.Router('');
const UserController = require('../controller/UserController.js');
const RetalRegistrationController = require('../controller/RentalRegistrationController');


router.post('/login',UserController.login);

router.post('/signup',UserController.signup);

router.get('/showdata/:token',UserController.showdata);

router.delete('/deletedata/:token',UserController.deletedata);

router.post('/updatedata',UserController.updatedata);

router.post('/registration',RetalRegistrationController.registration);

module.exports = router;