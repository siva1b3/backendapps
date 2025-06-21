import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../../src/app";

describe("GET /api/v1/statusList", () => {
  it("should return status 200 and a list of statuses", async () => {
    const response = await request(app).get("/api/v1/statusList");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
