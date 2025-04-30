export const getAllItems = () => {
  return [{ id: 1, name: "Sample Item" }];
};

export const createItem = (item) => {
  return { id: 2, ...item };
};

export const updateItem = (id, updates) => {
  return { id, ...updates };
};

export const deleteItem = (id) => {
  return { message: `Item ${id} deleted` };
};
