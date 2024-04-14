const { Bike } = require('../models/models');
const {
  getAllFromDB,
  getByIdFromDB,
  createInDB,
  updatedByIdInDB,
  deleteFromDB,
} = require('./base.js');

const findAllBikes = getAllFromDB(Bike);
const findBikeById = getByIdFromDB(Bike);
const createBike = createInDB(Bike);
const updatedBikeById = updatedByIdInDB(Bike);
const deleteBike = deleteFromDB(Bike);

module.exports = {
  findBikeById,
  findAllBikes,
  createBike,
  updatedBikeById,
  deleteBike,
};