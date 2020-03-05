const express = require('express');
const router = express.Router('');
const RetalRegistrationController = require('../controller/RentalRegistrationController');

router.post('/registration',RetalRegistrationController.registration);