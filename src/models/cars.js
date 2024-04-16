const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    country: { type: String, required: true },
    year: { type: Number, required: true },
  },
  { strict: false }
);

module.exports = carSchema;
