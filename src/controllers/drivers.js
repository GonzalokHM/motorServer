const {
  findAllDrivers,
  findDriverById,
  createDriver,
  updatedDriverById,
  deleteDriver,
} = require('../repositories/drivers');

const genericController = require('./genericControllers');

const driverController = genericController({
  findAll: findAllDrivers,
  findById: findDriverById,
  create: createDriver,
  updateById: updatedDriverById,
  deleteIt: deleteDriver
});

module.exports = driverController;