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
    },
      preferenceTypePet: function(req, res)
    {
       
        switch (parseInt(req.body.radioNewPet)) {
            case 1:
                 var optionsPets = require('../model/typeCats');
                
                break;
        
            case 2:
                var optionsPets = require('../model/typeDogs');
                break;
        };
        

        res.render('views/principal/index', {pathName: "principal-main-option-new-pet", optionsPets});
    } 
}
