const express = require('express');
const router = express.Router();
const HomeController = require('../Controllers/HomeController');


router.get('/', function(req, res){    
    HomeController.index(req, res);
});

module.exports = router;