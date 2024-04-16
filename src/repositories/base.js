  const getAllFromDB = (model) => async (filter={}) => {
  const queryOptions = {};
  Object.keys(filter).forEach(key => {
    queryOptions[key] = { $regex: new RegExp(filter[key], 'i') };
  });
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
