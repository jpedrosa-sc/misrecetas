var mongoose = require('mongoose');
var Receta = require("../model/Receta");

var recetaController = {};

recetaController.list = function(req, res){
    
    console.log("Recetas")
    Receta.find({}).exec(function(err, recetas){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        console.log(recetas)
        res.render('../views/receta/index', {recetas: recetas} ); 
    });
};


module.exports = recetaController;