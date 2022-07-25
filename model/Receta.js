var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecetaSchema = new Schema({
    title: {type:String, required: true, max:100},
});



module.exports = mongoose.model('Receta', RecetaSchema);