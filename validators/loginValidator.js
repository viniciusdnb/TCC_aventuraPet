//cada nome de campo é um nome do objeto que contem as regras de validacao
const {checkSchema} = require('express-validator');
const loginValidator = checkSchema({    
    username: {
        errorMessage: "invalid username",
        notEmpty: true,        
    },
    password: {
        notEmpty: true,
        isLength: {
            options: {
                min: 4
            },
            errorMessage: 'password should be at least 8 chars'
        }
    }

});
module.exports = loginValidator;
