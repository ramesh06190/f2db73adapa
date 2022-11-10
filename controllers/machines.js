var machines = require('../models/machines');
// List of all machines
exports.machines_list = async function(req, res) {
    try{ 
        machines = await machines.find(); 
        res.send(machines); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }
};
// for a specific machine.
exports.machines_detail = function(req, res) {
res.send('NOT IMPLEMENTED: machines detail: ' + req.params.id);
};
// Handle machines create on POST.
exports.machines_create_post = async function(req, res) {
    console.log(req.body) 
    let document = new machines(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"MachineType":"Refrigerator","Capacity":1,"useType":"Domestic","Energy":"solar"}
    document.MachineType = req.body.MachineType; 
    document.Capacity = req.body.Capacity; 
    document.useType = req.body.useType; 
    document.Energy = req.body.Energy;
    try{ 
        let results = await document.save(); 
        res.send(results); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }
};
// Handle machines delete form on DELETE.
exports.machines_delete = function(req, res) {
res.send('NOT IMPLEMENTED: machines delete DELETE ' + req.params.id);
};
// Handle machines update form on PUT.
exports.machines_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: machines update PUT' + req.params.id);
};