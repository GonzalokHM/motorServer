const { Driver } = require('../../models/models');
const {
  getAllFromDB,
  getByIdFromDB,
  createInDB,
  updatedByIdInDB,
  deleteFromDB,
} = requier('./base.js');

const findAllDrivers = getAllFromDB(Driver);
const findDriverById = getByIdFromDB(Driver);
const createDriver = createInDB(Driver);
const updatedDriverById = updatedByIdInDB(Driver);
const deleteDriver = deleteFromDB(Driver);

module.exports = {
  findDriverById,
  findAllDrivers,
  createDriver,
  updatedDriverById,
  deleteDriver,
};
