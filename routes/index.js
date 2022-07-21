var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query.color1);
  console.log(req.query.color2);
  console.log(req.query.color3);
  res.render('index');
});

/* GET contact page. */
router.get('/contacto', function(req, res, next) {
  res.render('contacto');
});

/* GET contact page. */
router.post('/validar-contacto', function(req, res, next) {
  let email = req.body.email;
  let password = req.body.password;
  console.log(email,password);

  //res.send('Muchas gracias por contatar con nosotros '+email+' , será cocinado en breve.');
  res.render('validar-contacto', {email:email, password:password})
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
