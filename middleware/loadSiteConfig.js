const site_config = require('../config/site.config.js');
const loadSiteConfig = function(req, res, next){
    console.log('Cargamos información del sitio');
    //res.locals.site_name = site_config.site_name;
    res.locals.site_config = site_config
    next();
}


module.exports = loadSiteConfig


