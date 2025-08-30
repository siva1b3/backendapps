// tests/userRoles.test.ts
import request from "supertest";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import express from "express";

// Import router (your real code)
import { userRolesRouter } from "../src/routes/index.routes"; // adjust path as needed
import prisma from "../src/prisma/prisma"; // real prisma export, but we'll mock it

// Mock prisma
vi.mock("../src/prisma/prisma", () => {
  return {
    default: {
      user_roles: {
        findMany: vi.fn(),
      },
    },
  };
});

const app = express();
app.use(express.json());
app.use("/api/v1/roles", userRolesRouter);

const mockedPrisma = prisma as unknown as {
  user_roles: { findMany: ReturnType<typeof vi.fn> };
};

describe("GET /api/v1/roles", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  // ---------- DEFAULT / UNDEFINED PARAM ----------
  it("defaults to is_active=true and returns active roles", async () => {
    mockedPrisma.user_roles.findMany.mockResolvedValueOnce([
      { role_name: "admin", is_active: true },
    ]);

    const res = await request(app).get("/api/v1/roles");

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveLength(1);
    expect(mockedPrisma.user_roles.findMany).toHaveBeenCalledWith({
      where: { is_active: true },
    });
  });

  it("defaults to is_active=true and returns 404 when no active roles", async () => {
    mockedPrisma.user_roles.findMany.mockResolvedValueOnce([]);

    const res = await request(app).get("/api/v1/roles");

    expect(res.status).toBe(404);
    expect(res.body.message).toBe("No active roles found");
  });

  // ---------- is_active=true ----------
  it("returns active roles when is_active=true", async () => {
    mockedPrisma.user_roles.findMany.mockResolvedValueOnce([
      { role_name: "manager", is_active: true },
    ]);

    const res = await request(app).get("/api/v1/roles?is_active=true");

    expect(res.status).toBe(200);
    expect(res.body.data[0].role_name).toBe("manager");
    expect(mockedPrisma.user_roles.findMany).toHaveBeenCalledWith({
      where: { is_active: true },
    });
  });

  it("returns 404 when no active roles and is_active=true", async () => {
    mockedPrisma.user_roles.findMany.mockResolvedValueOnce([]);

    const res = await request(app).get("/api/v1/roles?is_active=true");

    expect(res.status).toBe(404);
    expect(res.body.message).toBe("No active roles found");
  });

  // ---------- is_active=false ----------
  it("returns inactive roles when is_active=false", async () => {
    mockedPrisma.user_roles.findMany.mockResolvedValueOnce([
      { role_name: "guest", is_active: false },
    ]);

    const res = await request(app).get("/api/v1/roles?is_active=false");

    expect(res.status).toBe(200);
    expect(res.body.data[0].role_name).toBe("guest");
    expect(mockedPrisma.user_roles.findMany).toHaveBeenCalledWith({
      where: { is_active: false },
    });
  });

  it("returns 404 when no inactive roles and is_active=false", async () => {
    mockedPrisma.user_roles.findMany.mockResolvedValueOnce([]);

    const res = await request(app).get("/api/v1/roles?is_active=false");

    expect(res.status).toBe(404);
    expect(res.body.message).toBe("No inactive roles found");
  });

  // ---------- is_active=all ----------
  it("returns all roles when is_active=all", async () => {
    mockedPrisma.user_roles.findMany.mockResolvedValueOnce([
      { role_name: "admin", is_active: true },
      { role_name: "guest", is_active: false },
    ]);

    const res = await request(app).get("/api/v1/roles?is_active=all");

    expect(res.status).toBe(200);
    expect(res.body.data).toHaveLength(2);
    expect(mockedPrisma.user_roles.findMany).toHaveBeenCalledWith();
  });

  it("returns 404 when no roles exist and is_active=all", async () => {
    mockedPrisma.user_roles.findMany.mockResolvedValueOnce([]);

    const res = await request(app).get("/api/v1/roles?is_active=all");

    expect(res.status).toBe(404);
    expect(res.body.message).toBe("No roles found");
  });

  // ---------- INVALID PARAM ----------
  it("returns 400 for invalid is_active param", async () => {
    const res = await request(app).get("/api/v1/roles?is_active=yes");

    expect(res.status).toBe(400);
    expect(res.body.message).toBe(
      "is_active must be 'true', 'false', or 'all'"
    );
  });

  // ---------- DB ERROR ----------
  it("returns 500 when prisma throws", async () => {
    mockedPrisma.user_roles.findMany.mockRejectedValueOnce(
      new Error("DB failure")
    );

    const res = await request(app).get("/api/v1/roles?is_active=true");

    expect(res.status).toBe(500);
    expect(res.body.message).toBe("Failed to fetch roles");
  });
});
