const express = require('express');
const carController = require('../controllers/cars')

const router = express.Router();

const {
    getAllItems: getAllCars,
    getItemById: getCarById,
    createItem: createCar,
    updateItemById: updatedCarById,
    deleteItem: deleteCar
} = carController;

router.get('/', getAllCars)
router.get('/:id', getCarById)
router.post('/', createCar)
router.put('/:id', updatedCarById)
router.delete('/:id', deleteCar)

module.exports = router;