const express = require('express');
const router = express.Router();
const path = require('path');
const home = require('../controllers/homeController.js');
const maps = require('../controllers/mapsController.js');
const auth = require('../controllers/authController.js');
const user = require('../controllers/userController.js');

router.get('/', home.home);
router.get('/maps/world', maps.world);

module.exports = router;