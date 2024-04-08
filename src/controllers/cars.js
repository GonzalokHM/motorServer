const { Car, Bike, Driver } = require('../models/models');

const getAllCars = async (req, res) => {
  const { filter } = req.query;

  const nameFilterOptions = {
    name: { $regex: new RegExp(filter, 'i') },
  };

  const cars = await Car.find(filter ? nameFilterOptions : {});
  res.status(200).json({ data: cars });
};

const getCarById = (req, res) => {
  const { id } = req.params;

  const car = cars.find((car) => {
    return car.id.toString === id;
  });
  res.status(200).json({ data: car });
};

const createCar = async(req, res) => {
  const newCar = new Car({
    name: req.body.name
  })
await newCar.save();
  res.status(201).json({ data: newCar });
};

const updatedCarById = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  //añadir codigo para asegurar los campos requeridos y controlar errores
  //simulacion actualizacion db?
  cars = cars.map((car) => {
    if (car.id.toString() === id) {
      return {
        ...car,
        name,
      };
    } else {
      return car;
    }
  });
  //simulacion busqueda db actualizado?
  const updatedCar = cars.find((car) => car.id.toString() === id);
  res.status(200).json({ data: updatedCar });
};

const deleteCar = (req, res) => {
  const { id } = req.params;

  cars = cars.filter((car) => {
    return car.id.toString() !== id;
  });

  res.status(200).json({ data: 'ok' });
};

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updatedCarById,
  deleteCar,
};
