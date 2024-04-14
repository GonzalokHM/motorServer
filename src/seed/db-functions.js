require('../config/db');
const { Car, Bike, Driver } = require('../models/models');
const seed = require('./seed');

const cleanCollections = async () => {
  await Car.collection.drop();
  await Bike.collection.drop();
  await Driver.collection.drop();

  console.log('>>> Colecciones limpias');
};

const saveDocuments = async () => {
  const cars = await Car.insertMany(seed.cars);
  const bikes = await Bike.insertMany(seed.bikes);
  const drivers = await Driver.insertMany(seed.drivers);
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

const updateBikes = async (bikes, drivers) => {
  await Promise.all(
    bikes.map(async (bike) => {
      // Encuentra el conductor basado en el _driverId almacenado en la bicicleta
      const driver = drivers.find((driver) => driver._driverId === bike._driver);
      if (driver) {
        // Actualiza la bicicleta para establecer la referencia correcta al conductor
        await Bike.updateOne({ _id: bike._id }, { driver: driver._id });
      }
    })
  );
  console.log('>>> Elementos Bike actualizados');
};

const updateDrivers = async (cars, bikes, drivers) => {
  
  console.log("Debugging drivers data:", drivers);

  await Promise.all(
    drivers.map(async (driver) => {

      console.log("Processing driver:", driver); 
      if (!Array.isArray(driver._cars)) {
        console.error("Error: _cars is not an array for driver", driver);
      }
      if (!Array.isArray(driver._bikes)) {
        console.error("Error: _bikes is not an array for driver", driver);
      }

      const dbCars = driver._cars.map((carId) => {
        const relatedCar = cars.find((car) => car._vehicleId === carId);
        return relatedCar ? relatedCar._id : null;
      }).filter(id => id !== null); // Filtra IDs nulos

      const dbBikes = driver._bikes.map(bikeId => {
        const relatedBike = bikes.find((bike) => bike._vehicleId === bikeId);
        return relatedBike ? relatedBike._id : null;
      }).filter(id => id !== null); // Filtra IDs nulos

      await Driver.updateOne(
        { _id: driver._id }, 
        { $set: { cars: dbCars, bikes: dbBikes } }
      );
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
  await Bike.updateMany(
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
  updateBikes,
  updateDrivers,
  cleanPrivateFields,
};
