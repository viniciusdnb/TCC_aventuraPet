const express = require('express');
const App = express();
const port = 8080;
const hostName = 'localhost'
const router = require('./Router/Router');
/*--- App CONFIGS ---*/

//App use's
App.use(express.static("public"));
App.use(express.json());
App.use(express.urlencoded({extended:true}));


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