// tests/unit/routes/stcStatus.route.test.ts
import request from "supertest";
import app from "../../src/app";
import { describe, it, expect } from "vitest";

describe("GET /v1/status", () => {
  it("should return status ok and a data array", async () => {
    const res = await request(app).get("/v1/status");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok", data: ["item1", "item2"] });
  });

  it("should return status ok and a data array", async () => {
    const res = await request(app).get("/v1/status");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      status: "ok",
      HH: "NBSAND",
      data: ["item1", "item2"],
    });
  });
});

describe("GET /v1/status/:id", () => {
  it("should return status ok and message with id", async () => {
    const res = await request(app).get("/v1/status/123");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      status: "ok",
      message: "Fetched status with id 123",
    });
  });
});

describe("POST /v1/status", () => {
  it("should return status ok and echo posted data", async () => {
    const payload = { name: "test-status" };
    const res = await request(app).post("/v1/status").send(payload);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      status: "ok",
      message: "Created new status",
      data: payload,
    });
  });
});

describe("PUT /v1/status/:id", () => {
  it("should return status ok and updated data", async () => {
    const payload = { name: "updated-status" };
    const res = await request(app).put("/v1/status/1").send(payload);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      status: "ok",
      message: "Updated status 1",
      data: payload,
    });
  });
});

describe("DELETE /v1/status/:id", () => {
  it("should return status ok and deleted message", async () => {
    const res = await request(app).delete("/v1/status/2");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      status: "ok",
      message: "Deleted status with id 2",
    });
  });
});
