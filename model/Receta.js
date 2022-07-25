var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecetaSchema = new Schema({
    title: {type:String, required: true, max:100},
    subtitle: {type:String, required: true, max:100},
    main_image: {type:String},
    body : {type:String, required:false, max: 2000},
    autor: {type:String, required: true, max:100},

});



module.exports = mongoose.model('Receta', RecetaSchema);