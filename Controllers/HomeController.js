module.exports = {
    index: function(req, res){ 
        var text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut saepe excepturi provident minima eum quas, culpa officia, deleniti quibusdam nobis blanditiis quia! Velit eius eaque consequuntur commodi debitis nobis sint.'
        if(text.length > 200){
          var partText = text.slice(0,200);
        }
        res.render('views/home/index', {'text':partText});
    }
};