const express = require('express');
const router = express.Router();
const HomeController = require('../Controllers/HomeController');
const LoginController = require('../Controllers/LoginController')


router.get('/', function(req, res){    
    HomeController.index(req, res);
});

router.get('/login', function(req, res){
    LoginController.index(req, res);
})

module.exports = router;