const express = require('express');
const router = express.Router();
const passport = require('../auth/passport');
const loginValidator = require('../validators/loginValidator');
const { checkSchema, validationResult } = require('express-validator');


router.post('/login/auth',
    //regra de validacao e sanitização dos dados enviado do formulario do client
    loginValidator,

    //funcao que verifica se a validação passou
    function (req, res, next) {
        const errorResult = validationResult(req);

        //se a conter erro retorna para a pagina de login 
        if (!errorResult.isEmpty()) {
            return res.render('views/login/index',{ errors: errorResult.array()});
        }
        next();
    },
    //passou pela validacao dos dados do formulario 
    //verifica se os dados consegue ser autenticado
    passport.authenticate('local', {
        successRedirect: '/home',
        failureRedirect: '/login'
    })
);


router.get('/logout', function (req, res) {
    req.logout(function () {
        res.redirect('/');
    });
});

module.exports = router;
