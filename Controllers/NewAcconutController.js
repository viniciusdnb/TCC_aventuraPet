const { session } = require("passport");


module.exports = {
    index: function(req, res)
    {
        //passando um objeto com valores das paginas solicitada,
        //para ficar dinamico a escolha das paginas mantendo os arquivos padrao e escolhenco do main dinamicamente
        //console.log(req.session.email != 'undefined'? console.log(req.session.email): console.log('nao definido'));
        let emailSession = req.session.email != 'undefined'? req.session.email : undefined;
        //passando um objeto que contem varios atributos como resposta
        //nesse caso verifica se ja tem email nao sessao para devolver pro client
        res.render('views/account/index', {pathName:'main-account',email:emailSession});
    },
    verifyEmail:function(email, req, res)
    {
        //funcao para verficar se existe o email na base de dados
        //se nao existir redireciona para cadastro de nome
        //e salva na sessao o email

        req.session.email = email;
        
        this.name(req, res)

        //se existir redireciona para tela de login
        //com mesnagem dizendo que o email ja existe e que pode fazer a recuperação de senha
    },
    name:function(req, res){
         res.render('views/account/index',{pathName:"main-new-account-name"});
    },
    saveName: function(name,req, res)
    {
        //salva na sessao o nome da pessoa e redireciona pra a pagina de seleção de serviços
        req.session.name = name;
        res.render('views/account/index', {pathName:"main-new-account-options-service"});
    }, 
    options:function(req, res)
    {
        res.render('views/account/index', {pathName:"main-new-account-options-service"})
    },
    saveOptionUser: function(options, req, res)
    {
        req.session.checkboxOption = options;
        console.log(req.session);
        res.render('views/account/index', {pathName:"main-new-account-password"});
    }



}
