const mongoose = require("mongoose")
const machinesSchema = mongoose.Schema({
MachineType: String,
Capacity: Number,
useType: String,
Energy: String
})
module.exports = mongoose.model("machines",
machinesSchema)
