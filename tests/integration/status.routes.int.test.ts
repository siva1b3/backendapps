// tests/integration/routes/status.routes.int.test.ts
import request from "supertest";
import app from "../../src/app";
import { describe, it, expect } from "vitest";

describe("Integration tests for /v1/status route", () => {
  it("should return status ok and a data array on GET /v1/status", async () => {
    const res = await request(app).get("/v1/status");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok", data: ["item1", "item2"] });
  });

  // You can add more integration tests here...
});
