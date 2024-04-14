const genericController = ({ findAll, findById, create, updateById, deleteIt }) => {
    const getAllItems = async (req, res) => {
      try {
        const { filter } = req.query;
        const items = await findAll(filter);
        res.status(200).json({ data: items });
      } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
      }
    };
  
    const getItemById = async (req, res) => {
      try {
        const { id } = req.params;
        const item = await findById(id);
        if (!item) {
          return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ data: item });
      } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
      }
    };
  
    const createItem = async (req, res) => {
      try {
        const newItem = await create(req.body);
        res.status(201).json({ data: newItem });
      } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
      }
    };
  
    const updateItemById = async (req, res) => {
      try {
        const { id } = req.params;
        const updatedItem = await updateById(id, req.body);
        if (!updatedItem) {
          return res.status(404).json({ message: 'Item not updated' });
        }
        res.status(200).json({ data: updatedItem });
      } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
      }
    };
  
    const deleteItem = async (req, res) => {
      try {
        await deleteIt(req.params.id);
        res.status(200).json({ message: 'Item deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
      }
    };
  
    return {
      getAllItems,
      getItemById,
      createItem,
      updateItemById,
      deleteItem,
    };
  }
  
  module.exports = genericController;
  