const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const users = require('../models/user');


passport.use(new LocalStrategy(function(user, password, done){

    //VERIFICACAO DOS DOADOS DO USUARIO
    
    /*var usuario = users.find(u => u.username === user);

    if(!usuario){
        return done(null, false, {message:'usuario no encontrado'});    
    }
    if(usuario.password !== password){
        return done(null, false, {message: 'senha incorreta'});
    }

    return done(null, usuario)*/

}));



passport.serializeUser(function(usuario, done){
    done(null, usuario.id);
});

passport.deserializeUser(function(id, done){
    
    var usuario = users.find(u => u.id === id);
    done(null, usuario);
})

module.exports = passport;
