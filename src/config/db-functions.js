require('./db');
const { Car, Bike, Driver } = require('../models/models');
const seed = require('../seed/seed');

const cleanCollections = async () => {
  await Car.collection.drop();
  await Bike.collection.drop();
  await Driver.collection.drop();

  console.log('>>> Colecciones limpias');
};

const saveDocuments = async () => {
  const cars = await Car.insertMany(seed.cars);
  const bikes = await Bike.insertMany(seed.bikes);
  const drivers = await Driver.insertMany(seed.Drivers);
  console.log('>>> Documentos Guardandos con exito!');

  return {
    cars,
    bikes,
    drivers,
  };
};

const updateCars = async (cars, drivers) => {
  await Promise.all(
    cars.map(async (car) => {
      const driver = drivers.find((driver) => driver._driverId === car._driver);
      await car.updateOne({ driver: driver._id });
    })
  );
  console.log('>>> Elementos Car actualizados');
};
const updateDrivers = async (cars, drivers) => {
  await Promise.all(
    drivers.map(async (driver) => {
      const dbCars = driver._cars.map((carId) => {
        const relatedCar = cars.find((car) => car._vehicleId === carId);
        return relatedCar._id;
      });
      await Driver.updateOne({ cars: dbCars });
    })
  );
  console.log('>>> Elementos Driver actualizados');
};
const cleanPrivateFields = async () => {
  await Driver.updateMany(
    {},
    {
      $unset: {
        _driverId: 1,
        _cars: 1,
        _bikes: 1,
      },
    }
  );
  await Car.updateMany(
    {},
    {
      $unset: {
        _vehicleId: 1,
        _driver: 1,
      },
    }
  );
  console.log('>>> Campos privados eliminados');
};

module.exports = {
  cleanCollections,
  saveDocuments,
  updateCars,
  updateDrivers,
  cleanPrivateFields,
};
