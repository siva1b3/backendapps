import supertest from "supertest";
import app from "../../../src/app"; // Import the app for testing
import { describe, it, expect } from "vitest";

const request = supertest(app); // Set up the request using the app instance

describe("Status Routes", () => {
  // Test GET /v1/status
  it("should return a list of statuses", async () => {
    const response = await request.get("/v1/status");
    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(response.body.data).toEqual(["item1", "item2"]);
  });

  // Test GET /v1/status/:id
  it("should return a single status by ID", async () => {
    const response = await request.get("/v1/status/1");
    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(response.body.message).toBe("Fetched status with id 1");
  });

  // Test POST /v1/status
  it("should create a new status", async () => {
    const newData = { name: "New Item" };
    const response = await request.post("/v1/status").send(newData);
    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(response.body.message).toBe("Created new status");
    expect(response.body.data).toEqual(newData);
  });

  // Test PUT /v1/status/:id
  it("should update a status by ID", async () => {
    const updatedData = { name: "Updated Item" };
    const response = await request.put("/v1/status/1").send(updatedData);
    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(response.body.message).toBe("Updated status 1");
    expect(response.body.data).toEqual(updatedData);
  });

  // Test DELETE /v1/status/:id
  it("should delete a status by ID", async () => {
    const response = await request.delete("/v1/status/1");
    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(response.body.message).toBe("Deleted status with id 1");
  });
});
