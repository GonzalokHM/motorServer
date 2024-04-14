const {
  findAllCars,
  findCarById,
  createCar,
  updatedCarById,
  deleteCar,
} = require('../repositories/cars');

const genericController = require('./genericControllers');

const carController = genericController({
  findAll: findAllCars,
  findById: findCarById,
  create: createCar,
  updateById: updatedCarById,
  deleteIt: deleteCar
});

module.exports = carController;