//esquema de validaçoes da dados enviado pelo client

const {checkSchema} = require('express-validator');

const newAccountValidator ={
    email:{
        errorMessage: "Algo de errado com seu email, tente novamente",
        notEmpty: true,
        isEmail: true
    },
    name:{
        errorMessage: "Algo de errado com o seu nome, tenete novamente! lembrete: aqui só é permitido letras",
        notEmpty: true,
        isLength:{
            options:{
                max:60,
                min:4
            }
        },
        escape: true,
        matches: {
            options: [/^[A-Za-zÀ-ÖØ-öø-ÿ]+$/],
            errorMessage: "Algo de errado com o seu nome, tenete novamente! lembrete: aqui só é permitido letras"
        }
    }
    
    
};


//cria variaveis para se acessada individualmente cada campo com suas regras
const nameValidator = checkSchema({name:newAccountValidator.name});
const emailValidator = checkSchema({email:newAccountValidator.email})
//exporta o esquema como objeto
module.exports = {nameValidator, emailValidator};