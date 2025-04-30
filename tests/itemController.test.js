import {
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from "../src/itemController.js";
import * as itemService from "../src/itemService.js";

import request from "supertest";
import app from "../src/app.js"; // Assuming you have an Express app in app.js

// Mock response object
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

// Reset all mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
});

describe("Item API", () => {
  it("GET /items should return array", async () => {
    const res = await request(app).get("/items");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // Add POST, PATCH, DELETE tests similarly...
});

describe("Item Controller", () => {
  describe("getItems", () => {
    it("should return all items", () => {
      const req = {};
      const res = mockResponse();
      const mockItems = [{ id: 1, name: "Test Item" }];

      jest.spyOn(itemService, "getAllItems").mockReturnValue(mockItems);

      getItems(req, res);

      expect(itemService.getAllItems).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith(mockItems);
    });
  });

  describe("createItem", () => {
    it("should create a new item and return it", () => {
      const req = { body: { name: "New Item" } };
      const res = mockResponse();
      const mockItem = { id: 1, name: "New Item" };

      jest.spyOn(itemService, "createItem").mockReturnValue(mockItem);

      createItem(req, res);

      expect(itemService.createItem).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(mockItem);
    });
  });

  describe("updateItem", () => {
    it("should update an item and return it", () => {
      const req = { params: { id: "1" }, body: { name: "Updated Item" } };
      const res = mockResponse();
      const mockUpdated = { id: "1", name: "Updated Item" };

      jest.spyOn(itemService, "updateItem").mockReturnValue(mockUpdated);

      updateItem(req, res);

      expect(itemService.updateItem).toHaveBeenCalledWith("1", req.body);
      expect(res.json).toHaveBeenCalledWith(mockUpdated);
    });
  });

  describe("deleteItem", () => {
    it("should delete an item and return confirmation", () => {
      const req = { params: { id: "1" } };
      const res = mockResponse();
      const mockResponseMsg = { message: "Item 1 deleted" };

      jest.spyOn(itemService, "deleteItem").mockReturnValue(mockResponseMsg);

      deleteItem(req, res);

      expect(itemService.deleteItem).toHaveBeenCalledWith("1");
      expect(res.json).toHaveBeenCalledWith(mockResponseMsg);
    });
  });
});
