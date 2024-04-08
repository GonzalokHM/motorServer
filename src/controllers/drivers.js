const getAllDrivers = (req, res) => {
  const { filter } = req.query;

  if (filter) {
    const filteredDrivers = drivers.filter((driver) => {
      return driver.type.toUpperCase() === filter.toUpperCase();
    });

    res.status(200).json({ data: filteredDrivers });
  } else {
    res.status(200).json({ data: drivers });
  }
};

const getDriverById = (req, res) => {
  const { id } = req.params;

  const driver = drivers.find((driver) => {
    return driver.id.toString === id;
  });
  res.status(200).json({ data: driver });
};

const createDriver = (req, res) => {
  const newDriver = {
    name: req.body.name,
    id: Date.now(),
  };

  drivers.push(newDriver);
  res.status(201).json({ data: newDriver });
};

const updatedDriverById = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  //añadir codigo para asegurar los campos requeridos y controlar errores
  //simulacion actualizacion db?
  drivers = drivers.map((driver) => {
    if (driver.id.toString() === id) {
      return {
        ...driver,
        name,
      };
    } else {
      return driver;
    }
  });
  //simulacion busqueda db actualizado?
  const updatedDriver = drivers.find((driver) => driver.id.toString() === id);
  res.status(200).json({ data: updatedDriver });
};

const deleteDriver = (req, res) => {
  const { id } = req.params;

  drivers = drivers.filter((driver) => {
    return driver.id.toString() !== id;
  });

  res.status(200).json({ data: 'ok' });
};

module.exports = {
  getAllDrivers,
  getDriverById,
  createDriver,
  updatedDriverById,
  deleteDriver,
};
