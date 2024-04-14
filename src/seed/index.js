require('../config/db')
const { cleanCollections, saveDocuments, updateCars, updateBikes, updateDrivers, cleanPrivateFields } = require("./db-functions");


const main = async () => {
  await cleanCollections();
  const { cars, bikes, drivers } = await saveDocuments();
  await updateCars(cars, drivers);
  await updateBikes(bikes, drivers);
  await updateDrivers(cars, drivers);
  await cleanPrivateFields();
};

main()
  .then(() => {
    console.log('Script Terminado');
    process.exit();
  })
  .catch((err) => {
    console.log('Error Lanzando Script', err);
    process.exit(1);
  });
