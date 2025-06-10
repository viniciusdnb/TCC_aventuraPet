module.exports = {
    index: function(req, res)
    {
        //ver se o user ja tem pete cadastrado
        //caso nao tenha mandar imagem que indica que ainda nao tem
        const imgPet = false
        
        res.render('views/principal/index', {pathName:"principal-main", imgPet:imgPet});
    },
     addNewPet: function(req, res){
        const typePets = require('../model/typePets');
        res.render('views/principal/index', {pathName:"principal-main-add-new-pet", typePets});
    }
}
