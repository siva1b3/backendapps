import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../src/app"; // Update this to the correct path

describe("Status Router API", () => {
  it("GET /api/v1/statusList should return all statuses", async () => {
    const res = await request(app).get("/api/v1/statusList");
    expect(res.status).toBe(200);
    expect(res.text).toBe("GET all statuses");
  });

  it("POST /api/v1/status should create a new status", async () => {
    const res = await request(app).post("/api/v1/status");
    expect(res.status).toBe(200);
    expect(res.text).toBe("POST new status");
  });

  it("GET /api/v1/status/:id should return a specific status", async () => {
    const res = await request(app).get("/api/v1/status/123");
    expect(res.status).toBe(200);
    expect(res.text).toBe("GET status with ID 123");
  });

  it("PATCH /api/v1/status/:id should update a specific status", async () => {
    const res = await request(app).patch("/api/v1/status/123");
    expect(res.status).toBe(200);
    expect(res.text).toBe("PATCH status with ID 123");
  });

  it("DELETE /api/v1/status/:id should delete a specific status", async () => {
    const res = await request(app).delete("/api/v1/status/123");
    expect(res.status).toBe(200);
    expect(res.text).toBe("DELETE status with ID 123");
  });
});

describe("Status Router API 02", () => {
  it("GET /api/v1/statusList should return all statuses", async () => {
    const res = await request(app).get("/api/v1/statusList");
    expect(res.status).toBe(200);
    expect(res.text).toBe("GET all statuses");
  });

  it("POST /api/v1/status should create a new status", async () => {
    const res = await request(app).post("/api/v1/status");
    expect(res.status).toBe(200);
    expect(res.text).toBe("POST new status");
  });

  it("GET /api/v1/status/:id should return a specific status", async () => {
    const res = await request(app).get("/api/v1/status/123");
    expect(res.status).toBe(200);
    expect(res.text).toBe("GET status with ID 123");
  });

  it("PATCH /api/v1/status/:id should update a specific status", async () => {
    const res = await request(app).patch("/api/v1/status/123");
    expect(res.status).toBe(200);
    expect(res.text).toBe("PATCH status with ID 123");
  });

  it("DELETE /api/v1/status/:id should delete a specific status", async () => {
    const res = await request(app).delete("/api/v1/status/123");
    expect(res.status).toBe(200);
    expect(res.text).toBe("DELETE status with ID 123");
  });
});
