const express = require('express');
const App = express();
const port = 8080;
const hostName = 'localhost'
const router = require('./Router/Router');

/*configs para reativar no futuro 
quando estiver usando os modolus de sessao, autenticacao
verificar a configuração de rotas
const session = require('express-session');
const passport = require('passport');
const router = require('./routers/router');
const authRouter = require('./routers/authRouter');*/
/*--- App CONFIGS ---*/

//App use's
App.use(express.static("public"));
App.use(express.json());
App.use(express.urlencoded({extended:true}));

/*configs para reativar no futuro 
quando estiver usando os modolus de sessao, autenticacao
app.use(session({
    secret:'segredo',
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure: false,
        httpOnly: true,
        maxAge: 600000
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(router);
app.use(authRouter);*/

//App set's
App.set("views", __dirname, "views");
App.set("view engine", "ejs");

//App use router
App.use("/aventurapet", router);

App.get("/", function(req, res){
   res.redirect(`http://${hostName}:${port}/aventurapet/`)
})

App.listen(port, function(){
    console.log(`App online in http://${hostName}:${port}/aventurapet/`);
  
});
