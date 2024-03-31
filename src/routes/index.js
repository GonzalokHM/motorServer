const express = require('express');
const carRouter = require('./cars');
const bikesRouter = require('./bikes');

const router = express.Router();

router.use('/',carRouter)
router.use('/',bikesRouter)

module.exports = router;