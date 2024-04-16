const mongoose = require('mongoose');
const carSchema = require('./cars');
const bikeSchema = require('./bikes');
const driverSchema = require('./drivers');


const Car = mongoose.model('Car', carSchema);
const Bike = mongoose.model('Bike', bikeSchema);
const Driver = mongoose.model('Driver', driverSchema);

module.exports ={
    Car,Bike,Driver
}