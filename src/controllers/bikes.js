const {
    findAllBikes,
    findBikeById,
    createBike,
    updatedBikeById,
    deleteBike,
  } = require('../repositories/bikes');
  
  const genericController = require('./genericControllers');
  
  const bikeController = genericController({
    findAll: findAllBikes,
    findById: findBikeById,
    create: createBike,
    updateById: updatedBikeById,
    deleteIt: deleteBike
  });
  
  module.exports = bikeController;