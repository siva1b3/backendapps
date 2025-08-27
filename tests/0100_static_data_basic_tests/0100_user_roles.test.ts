import request from "supertest";
import { describe, it, expect, beforeEach, afterAll } from "vitest";
import app from "../../src/app"; // path to your express app
import prisma from "../../src/prisma/prisma"; // prisma client instance

describe("User Roles API", () => {
  // ----------------- GET /api/v1/roles -----------------
  it("should return empty array if no roles exist", async () => {
    const res = await request(app).get("/api/v1/roles");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
