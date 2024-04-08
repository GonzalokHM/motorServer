const express = require('express');

const router = express.Router();

router.get('/', getAllBikes)
router.get('/:id', getBikeById)
router.post('/', createBike)
router.put('/:id', updatedBikeById)
router.delete('/:id', deleteBike)

module.exports = router;