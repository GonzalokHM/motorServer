const express = require('express');
const carRouter = require('./cars');
const bikeRouter = require('./bikes');
const driverRouter = require('./drivers');

const router = express.Router();

router.use('/cars',carRouter)
router.use('/bikes',bikeRouter)
router.use('/drivers',driverRouter)

module.exports = router;