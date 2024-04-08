const express = require('express');

const router = express.Router();

router.get('/', getAllDrivers)
router.get('/:id', getDriverById)
router.post('/', createDriver)
router.put('/:id', updatedDriverById)
router.delete('/:id', deleteDriver)

module.exports = router;