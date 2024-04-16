const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    country: { type: String, required: true },
  },
  { strict: false }
);

module.exports = driverSchema;
