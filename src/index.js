const mongoose = require('mongoose');

mongoose.set('strict', false);
mongoose.set('strictQuery', false);
mongoose.set('strictPopulate', false);

// mongoose.connect('mongodb://127.0.0.1:27017/test');
mongoose
  .connect('mongodb://localhost:27017/test-db')
  .then(() => {
    console.log('conectando a la base de datos test-db');
  })
  .catch((err) => {
    console.log('error al conectar a la DB', err);
  });

const empySchema = new mongoose.Schema({});
const Car = mongoose.model('Car', empySchema);

//refact^^

//Busines Logic

const main = async () => {
  try {
    const newCar = new Car({
      name: 'Chaser',
      Brand: 'Toyota',
      country: 'Japan',
      Transmision: 'FR',
    });

    await newCar.save();
    console.log('el elemento se ha guardado correctamente');
  } catch (err) {
    console.log('error al crear el elemento');
  }
};

main();
