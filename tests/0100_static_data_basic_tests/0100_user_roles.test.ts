import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../../src/app";
import prisma from "../../src/prisma/prisma";

describe("User Roles API", () => {
  it("should return all user roles", async () => {
    const res = await request(app).get("/api/v1/roles");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("success", true);
    expect(res.body).toHaveProperty("data");
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  it("should return 200 and role data when role exists", async () => {
    const data = await prisma.user_roles.findFirst({
      orderBy: { role_name: "asc" },
    });

    if (!data) {
      throw new Error("No roles found in the database");
    }
    const res = await request(app).get(`/api/v1/roles/${data.role_name}`);
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.role_name).toBe(data.role_name);
  });

  it("should return 404 when role does not exist", async () => {
    const res = await request(app).get("/api/v1/roles/ghostRole");
    expect(res.status).toBe(404);
    expect(res.body).toMatchObject({
      success: false,
      message: "Role not found",
    });
  });
});
