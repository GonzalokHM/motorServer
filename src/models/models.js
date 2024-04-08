const mongoose = require('mongoose')

const empySchema = new mongoose.Schema({});
const Car = mongoose.model('Car', empySchema);
const Bike = mongoose.model('Bike', empySchema);
const Driver = mongoose.model('Bike', empySchema);

module.exports ={
    Car,Bike,Driver
}