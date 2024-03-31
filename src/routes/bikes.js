const express = require('express');

const router = express.Router();

router.get('/', getAllBikes)

module.exports = router;