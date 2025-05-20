module.exports = {
    index: function(req, res)
    {
        res.render('views/account/index', {pathName:'main-account'});
    },
    verifyEmail:function(email, req, res)
    {
        //funcao para verficar se existe o email na base de dados
        //se nao existir redireciona para cadastro de nome
        //e salva na sessao o email
        this.name(req, res)

        //se existir redireciona para tela de login
        //com mesnagem dizendo que o email ja existe e que pode fazer a recuperação de senha
    },
    name:function(req, res){
         res.render('views/account/index',{pathName:"main-new-account-name"});
    },
    saveName: function(name, res)
    {
        //salva na sessao o nome da pessoa e redireciona pra a pagina de seleção de serviços
        res.render('views/account/index', {pathName:"main-new-account-options-service"});
    }

}
