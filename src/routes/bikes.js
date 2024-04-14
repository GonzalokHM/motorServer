const express = require('express');
const bikeController = require('../controllers/bikes')

const router = express.Router();

const {
    getAllItems: getAllBikes,
    getItemById: getBikeById,
    createItem: createBike,
    updateItemById: updatedBikeById,
    deleteItem: deleteBike
} = bikeController;

router.get('/', getAllBikes)
router.get('/:id', getBikeById)
router.post('/', createBike)
router.put('/:id', updatedBikeById)
router.delete('/:id', deleteBike)

module.exports = router;