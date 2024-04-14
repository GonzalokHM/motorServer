const { Car } = require('../models/models');
const {
  getAllFromDB,
  getByIdFromDB,
  createInDB,
  updatedByIdInDB,
  deleteFromDB,
} = require('./base.js');

const findAllCars = getAllFromDB(Car);
const findCarById = getByIdFromDB(Car);
const createCar = createInDB(Car);
const updatedCarById = updatedByIdInDB(Car);
const deleteCar = deleteFromDB(Car);

module.exports = {
  findCarById,
  findAllCars,
  createCar,
  updatedCarById,
  deleteCar,
};
