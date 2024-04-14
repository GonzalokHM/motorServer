const getAllFromDB = (model) => async (filter) => {
  const nameFilterOptions = {
    name: { $regex: new RegExp(filter, 'i') },
  };

  const item = await model.find(filter ? nameFilterOptions : {});
  return item;
//   const getAllFromDB = (model) => async (filter={}) => {
//   const queryOptions = {};
//   if (filter.name) {
//     queryOptions.name = { $regex: new RegExp(filter.name, 'i') };
//   }if(filter.country){
//     queryOptions.country = {$regex: new RegExp(filter.country, 'i')}
//   }
// return await model.find(queryOptions);}
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
