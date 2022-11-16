var express = require('express');
const machines_controlers=require('../controllers/machines');
var router = express.Router();

/* GET machines */
router.get('/', machines_controlers.machines_view_all_Page );

/* GET detail machine page */
router.get('/detail', machines_controlers.machines_view_one_Page);
/* GET create machine page */
router.get('/create', machines_controlers.machines_create_Page);

module.exports = router;
