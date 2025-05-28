const express = require('express');
const router = express.Router();
const HomeController = require('../Controllers/HomeController');
const LoginController = require('../Controllers/LoginController');
const {body, validationResult} = require('express-validator');
const NewAccountController = require('../Controllers/NewAcconutController');

router.get('/', function(req, res){    
    HomeController.index(req, res);
});

router.get('/login', function(req, res){
    LoginController.index(req, res);
});

router.post('/login/auth', 
    //regras de validação na rota para verificar se esta tentando fazer login de forma invalida
    //passando campos vazio
    //campos do corpo da requisição que sera validado
    body('user').notEmpty(),
    body('password').notEmpty(),
    function(req, res){

        //resultado da verificacao dos campos
        const resultErrors = validationResult(req);
       
        //verifica se a verificação esta vazia de erros
        if(resultErrors.isEmpty()){
            return LoginController.auth(req.body.user, req.body.password);
        }
        
        
        res.render('views/login/index',{errors:resultErrors.array()});
   
})


router.get('/new-account', function(req, res)
{
    NewAccountController.index(req, res);
})

router.post('/new-account/verfy-email', 

    body('email').notEmpty().escape(),
     function(req, res){
        const resultErrors = validationResult(req);
        if(resultErrors.isEmpty()){
            return NewAccountController.verifyEmail(req.body.email, req, res);
        }
        res.render('views/login/index',{errors:resultErrors.array()});
});

router.get('/new-account/name', function(req, res){
    NewAccountController.name(req, res);
})

router.post('/new-account/save-name', 

    body('name').notEmpty().escape(),
     function(req, res){
        const resultErrors = validationResult(req);
        if(resultErrors.isEmpty()){
            return NewAccountController.saveName(req.body.name, res);
        }
        res.render('views/login/index',{errors:resultErrors.array()});
});


module.exports = router;


/*
    modelo de verificar autenticacao
router.get('/home', function(req, res){
    //verifica se a solicitação esta autenticado
    if(req.isAuthenticated())
    {
        
        return homeController.index(req, res);
    }
    res.redirect('/login');

});

router.get('/login', function(req, res){
    loginController.index(req,res);
});*/
