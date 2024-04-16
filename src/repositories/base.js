// const getAllFromDB = (model) => async (filter) => {
  // let queryOptions = {};
  // if (filter && filter.name) {
  //   queryOptions.name = { $regex: new RegExp(filter.name, 'i') };
  // }

  // const items = await model.find(queryOptions);
  // return items;
  // mas flexiblilidad mas posibles filtros
  const getAllFromDB = (model) => async (filter={}) => {
    console.log("Query options received in repository:", filter);
  const queryOptions = {};
  if (filter.name) {
    queryOptions.name = { $regex: new RegExp(filter.name, 'i') };
  }if(filter.country){
    queryOptions.country = {$regex: new RegExp(filter.country, 'i')}
  }
  const items = await model.find(queryOptions);
  return items;
};

const getByIdFromDB = (model) => async (id) => {
  const item = await model.findById(id);
  return item;
};

const createInDB = (model)=> async (payload) => {
  const newItem = new model(payload);
  await newItem.save();

  return newItem;
};

const updatedByIdInDB = (model) => async (id, payload) => {
  const item = await model.findByIdAndUpdate(id, payload, { new: true });
  return item;
};

const deleteFromDB = (model)=> async (id) => {
  await model.deleteOne({ _id: id });
};
module.exports = {
  getAllFromDB,
  getByIdFromDB,
  createInDB,
  updatedByIdInDB,
  deleteFromDB,
};
