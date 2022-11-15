var machines = require('../models/machines');
// List of all machines
exports.machines_list = async function(req, res) {
    try{ 
        results = await machines.find(); 
        res.send(results); 
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
// VIEWS
// Handle a show all view
exports.machines_view_all_Page = async function(req, res) {
    try{
    themachines = await machines.find();
    res.render('machines', { title: 'Machine Search Results', results: themachines });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// for a specific machine.
exports.machines_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    results = await machines.findById( req.params.id)
    res.send(results)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle machine update form on PUT.
exports.machines_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await machines.findById( req.params.id)
    // Do updates of properties
    if(req.body.MachineType)
    toUpdate.MachineType = req.body.MachineType;
    if(req.body.Capacity) toUpdate.Capacity = req.body.Capacity;
    if(req.body.useType) toUpdate.useType = req.body.useType;
    if(req.body.Energy) toUpdate.Energy = req.body.Energy;
    let results = await toUpdate.save();
    console.log("Sucess " + results)
    res.send(results)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};
// Handle machine delete on DELETE.
exports.machines_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    results = await machines.findByIdAndDelete( req.params.id)
    console.log("Removed " + results)
    res.send(results)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.machines_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    results = await machines.findById( req.query.id)
    res.render('machinesdetail',
    { title: 'Machines Detail', toShow: results });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};
