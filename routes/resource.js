var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var machines_controller = require('../controllers/machines');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// MACHINE ROUTES ///
// POST request for creating a machine.
router.post('/machines', machines_controller.machines_create_post);
// DELETE request to delete machine.
router.delete('/machines/:id', machines_controller.machines_delete);
// PUT request to update machine.
router.put('/machines/:id', machines_controller.machines_update_put);
// GET request for one machine.
router.get('/machines/:id', machines_controller.machines_detail);
// GET request for list of all machine items.
router.get('/machines', machines_controller.machines_list);
module.exports = router;