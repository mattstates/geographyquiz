const express = require('express');
const router = express.Router();
const path = require('path');
const home = require('../controllers/homeController.js');
const maps = require('../controllers/mapsController.js');
const auth = require('../controllers/authController.js');
const user = require('../controllers/userController.js');



router.get('/', home.home);
router.get('/game', home.home);
router.get('/login', home.home);
router.get('/privacypolicy', home.home);
router.get('/maps/world', maps.world);
router.post('/createuser', user.createUser);

router.get('/oauth/google', auth.googleLogin, auth.googleSuccess);
router.get('/oauth/google/callback', auth.googleCallbackMW, auth.googleCallback);


module.exports = router;