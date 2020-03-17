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

router.post('/multipleimage',RetalRegistrationController.multipleimage);

router.get('/propertydata',RetalRegistrationController.propertydata);

router.get('/moreinfoget/:id',RetalRegistrationController.moreinfoget);

router.get('/moreimage/:id',RetalRegistrationController.moreimage);

router.post('/moreinfo',RetalRegistrationController.moreinfo);

router.get('/extrainfoget/:id',RetalRegistrationController.extrainfoget);

module.exports = router;