const express = require('express');
const driverController = require('../controllers/drivers')

const router = express.Router();

const {
    getAllItems: getAllDrivers,
    getItemById: getDriverById,
    createItem: createDriver,
    updateItemById: updatedDriverById,
    deleteItem: deleteDriver
} = driverController;

router.get('/', getAllDrivers)
router.get('/:id', getDriverById)
router.post('/', createDriver)
router.put('/:id', updatedDriverById)
router.delete('/:id', deleteDriver)

module.exports = router;