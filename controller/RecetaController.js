var mongoose = require('mongoose');
var RecetaModel = require("../model/Receta");

var recetaController = {};

recetaController.list = function(req, res){
    
    console.log("Recetas")
    RecetaModel.find({}).exec(function(err, recetas){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        console.log(recetas)
        res.render('../views/receta/index', {recetas: recetas} ); 
    });
};


recetaController.show = function(req, res){
    console.log('ruta:', req.path);
    let ruta = req.path;
    let id = ruta.split("/")[2];
    console.log(id);

    RecetaModel.findOne({_id:id}).exec(function(err, receta){
        if( err ){ console.log('Error: ', err); return; }
        console.log(receta);
        res.render('../views/receta/show', {receta:receta});
    });

};

module.exports = recetaController;