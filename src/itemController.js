import * as itemService from "./itemService.js";

export const getItems = (req, res) => {
  const items = itemService.getAllItems();
  res.status(200).json(items);
};

export const createItem = (req, res) => {
  const item = itemService.createItem(req.body);
  res.status(201).json(item);
};

export const updateItem = (req, res) => {
  const item = itemService.updateItem(req.params.id, req.body);
  res.json(item);
};

export const deleteItem = (req, res) => {
  const result = itemService.deleteItem(req.params.id);
  res.json(result);
};
