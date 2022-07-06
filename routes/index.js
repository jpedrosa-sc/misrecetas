var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET contact page. */
router.get('/contacto', function(req, res, next) {
  res.send('Aquí irá mi página de contacto');
});

/* GET paginas de ingredientes. */
router.get('/ingredientes', function(req, res, next) {
  res.render('ingredientes');
});

/* GET paginas de ingredientes. */
router.get('/ingredientes/*', function(req, res, next) {
  console.log('ruta:', req.path);
  res.send('Pagina de un ingrediente');
});

/* GET recetas page. */
router.get('/recetas', function(req, res, next) {
  res.render('recetas');
});

/* GET chefs page. */
router.get('/chefs', function(req, res, next) {
  res.render('chefs');
});


/* GET paginas de ingredientes. */
router.get('/receta/*', function(req, res, next) {
  console.log('ruta:', req.path);
  res.send('Pagina de la receta: '+req.path);
});


/* GET login page. */
router.get('/login', function(req, res, next) {
  res.send('Aquí irá mi página de login');
});


module.exports = router;
