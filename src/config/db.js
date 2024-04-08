const mongoose = require('mongoose');


mongoose.set('strict', false);
mongoose.set('strictQuery', false);
mongoose.set('strictPopulate', false);

// mongoose.connect('mongodb://127.0.0.1:27017/garage');
mongoose
  .connect('mongodb://localhost:27017/garage-db')
  .then(() => {
    console.log('conectando a la base de datos garage-db');
  })
  .catch((err) => {
    console.log('error al conectar a la DB', err);
    //cerramos el servidor si no conecta con una DB
    process.exit(1)
  });



//refact^^

//Busines Logic

// const main = async () => {
//   try {
//     const newCar = new Car({
//       name: 'Chaser',
//       Brand: 'Toyota',
//       country: 'Japan',
//       Transmision: 'FR',
//     });

//     await newCar.save();
//     console.log('el elemento se ha guardado correctamente');
//   } catch (err) {
//     console.log('error al crear el elemento');
//   }
// };

// main();
