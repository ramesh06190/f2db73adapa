var express = require('express');
const machines_controlers=require('../controllers/machines');
var router = express.Router();

/* GET machines */
router.get('/', machines_controlers.machines_view_all_Page );

/* GET detail machine page */
router.get('/detail', machines_controlers.machines_view_one_Page);
/* GET create machine page */
router.get('/create', machines_controlers.machines_create_Page);
/* GET create update page */
// A little function to check if we have an authorized user and continue on or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
}
router.get('/update', secured, machines_controlers.machines_update_Page);
/* GET delete machine page */
router.get('/delete', machines_controlers.machines_delete_Page);


module.exports = router;
