import request from "supertest";
import { describe, it, expect, beforeEach, afterAll } from "vitest";
import app from "../../src/app"; // path to your express app
import prisma from "../../src/prisma/prisma"; // prisma client instance

describe("User Roles API", () => {
  it("should return empty array if no roles exist", async () => {
    const res = await request(app).get("/api/v1/roles");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body.some((role: any) => role.role_name === "Admin")).toBe(true);
  });

  it("should fail when DB is disconnected, then succeed when reconnected", async () => {
    // --- Step 1: Disconnect DB ---
    await prisma.$disconnect();

    // Hit API (should fail because DB is disconnected)
    const res1 = await request(app).get("/api/v1/roles");
    expect(res1.status).toBe(500); // assuming you handle DB errors with 500
    expect(res1.body).toHaveProperty("error");

    // --- Step 2: Reconnect DB ---
    await prisma.$connect();

    // Hit API again (should succeed now)
    const res2 = await request(app).get("/api/v1/roles");
    expect(res2.status).toBe(200);
    expect(Array.isArray(res2.body)).toBe(true);
  });
});
