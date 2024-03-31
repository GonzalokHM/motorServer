const express = require('express');

const router = express.Router();

router.get('/', getAllCars)
router.get('/:id', getCarById)
router.post('/', createCar)
router.put('/:id', updatedCarById)
router.delete('/:id', deleteCar)

module.exports = router;