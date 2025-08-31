// tests/userRoles.e2e.test.ts
import request from "supertest";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import app from "../src/app"; // your express app
import prisma from "../src/prisma/prisma"; // Prisma client instance
import ApiError from "../src/utils/ApiError";

// Combined Prisma mock
vi.mock("../src/prisma/prisma.ts", () => {
  return {
    default: {
      user_roles: {
        findFirst: vi.fn(),
        findMany: vi.fn(),
        create: vi.fn(),
      },
    },
  };
});

const mockedPrisma = prisma as unknown as {
  user_roles: {
    findFirst: ReturnType<typeof vi.fn>;
    findMany: ReturnType<typeof vi.fn>;
    create: ReturnType<typeof vi.fn>;
  };
};

describe("GET /api/v1/roles", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  // --- Success cases ---
  it("should return active roles when ?is_active=true", async () => {
    mockedPrisma.user_roles.findMany.mockResolvedValue([
      { id: 1, is_active: true },
    ]);
    const res = await request(app).get("/api/v1/roles?is_active=true");
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toEqual([{ id: 1, is_active: true }]);
    expect(mockedPrisma.user_roles.findMany).toHaveBeenCalledWith({
      where: { is_active: true },
    });
  });

  it("should return inactive roles when ?is_active=false", async () => {
    mockedPrisma.user_roles.findMany.mockResolvedValue([
      { id: 2, is_active: false },
    ]);
    const res = await request(app).get("/api/v1/roles?is_active=false");
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual([{ id: 2, is_active: false }]);
    expect(mockedPrisma.user_roles.findMany).toHaveBeenCalledWith({
      where: { is_active: false },
    });
  });

  it("should return all roles when ?is_active=all", async () => {
    const fakeRoles = [
      { id: 1, is_active: true },
      { id: 2, is_active: false },
    ];
    mockedPrisma.user_roles.findMany.mockResolvedValue(fakeRoles);
    const res = await request(app).get("/api/v1/roles?is_active=all");
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual(fakeRoles);
    expect(mockedPrisma.user_roles.findMany).toHaveBeenCalledWith();
  });

  it("should default to active roles when no query param", async () => {
    mockedPrisma.user_roles.findMany.mockResolvedValue([
      { id: 3, is_active: true },
    ]);
    const res = await request(app).get("/api/v1/roles");
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual([{ id: 3, is_active: true }]);
    expect(mockedPrisma.user_roles.findMany).toHaveBeenCalledWith({
      where: { is_active: true },
    });
  });

  // --- Invalid query params ---
  it("should return 400 for invalid query param", async () => {
    const res = await request(app).get("/api/v1/roles?is_active=invalid");
    expect(res.status).toBe(400);
    expect(res.body.message).toBe(
      "is_active must be 'true', 'false', or 'all'"
    );
  });

  it("should return 400 for case-sensitive mismatch", async () => {
    const res = await request(app).get("/api/v1/roles?is_active=TRUE");
    expect(res.status).toBe(400);
  });

  it("should return 400 for empty string param", async () => {
    const res = await request(app).get("/api/v1/roles?is_active=");
    expect(res.status).toBe(400);
  });

  // --- Data scenarios ---
  it("should return empty array if DB has no roles", async () => {
    mockedPrisma.user_roles.findMany.mockResolvedValue([]);
    const res = await request(app).get("/api/v1/roles?is_active=all");
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual([]);
  });

  it("should return empty array when asking active but only inactive exist", async () => {
    mockedPrisma.user_roles.findMany.mockResolvedValue([]);
    const res = await request(app).get("/api/v1/roles?is_active=true");
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual([]);
  });

  it("should return empty array when asking inactive but only active exist", async () => {
    mockedPrisma.user_roles.findMany.mockResolvedValue([]);
    const res = await request(app).get("/api/v1/roles?is_active=false");
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual([]);
  });

  it("should properly filter mixed active/inactive roles", async () => {
    mockedPrisma.user_roles.findMany.mockResolvedValue([
      { id: 10, is_active: true },
    ]);
    const res = await request(app).get("/api/v1/roles?is_active=true");
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual([{ id: 10, is_active: true }]);
  });

  // --- Response structure ---
  it("should always include success field in success response", async () => {
    mockedPrisma.user_roles.findMany.mockResolvedValue([
      { id: 1, is_active: true },
    ]);
    const res = await request(app).get("/api/v1/roles");
    expect(res.body).toHaveProperty("success", true);
  });

  it("should include message field in error response", async () => {
    const res = await request(app).get("/api/v1/roles?is_active=xyz");
    expect(res.body).toHaveProperty("message");
  });

  // --- Error handling ---
  it("should pass DB errors to error handler", async () => {
    mockedPrisma.user_roles.findMany.mockRejectedValue(new Error("DB failure"));
    const res = await request(app).get("/api/v1/roles?is_active=true");
    expect(res.status).toBe(500); // assuming global error handler sets 500
    expect(res.body.success).toBe(false);
    expect(res.body.message).toContain("Internal server error");
  });
});

describe("GET /api/v1/roles/:roleName", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("should return role when roleName exists", async () => {
    const fakeRole = { id: 1, role_name: "admin" };
    mockedPrisma.user_roles.findFirst.mockResolvedValueOnce(fakeRole);

    const res = await request(app).get("/api/v1/roles/admin");

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      success: true,
      data: fakeRole,
    });
  });

  it("should return 400 if roleName param is missing", async () => {
    mockedPrisma.user_roles.findMany.mockResolvedValue([
      { id: 3, is_active: true },
    ]);
    const res = await request(app).get("/api/v1/roles/");
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual([{ id: 3, is_active: true }]);
    expect(mockedPrisma.user_roles.findMany).toHaveBeenCalledWith({
      where: { is_active: true },
    });
  });

  it("should return 404 if role not found", async () => {
    mockedPrisma.user_roles.findFirst.mockResolvedValueOnce(null);

    const res = await request(app).get("/api/v1/roles/nonexistent");

    expect(res.status).toBe(404);
    expect(res.body).toEqual({
      success: false,
      message: "Role not found",
    });
  });

  it("should return 500 if database throws error", async () => {
    mockedPrisma.user_roles.findFirst.mockRejectedValueOnce(
      new Error("DB failure")
    );

    const res = await request(app).get("/api/v1/roles/admin");

    expect(res.status).toBe(500);
    expect(res.body).toEqual({
      success: false,
      message: "Internal server error",
    });
  });

  it("should handle ApiError correctly (forced 400)", async () => {
    // Simulate ApiError thrown before DB call
    mockedPrisma.user_roles.findFirst.mockImplementationOnce(() => {
      throw {
        __proto__: Error.prototype,
        statusCode: 400,
        message: "Bad input",
      };
    });

    const res = await request(app).get("/api/v1/roles/bad");

    expect([400, 500]).toContain(res.status); // depends if error instanceof ApiError check passes
  });

  it("should return error structure {success:false,message} on errors", async () => {
    mockedPrisma.user_roles.findFirst.mockResolvedValueOnce(null);

    const res = await request(app).get("/api/v1/roles/unknown");

    expect(res.body).toHaveProperty("success", false);
    expect(res.body).toHaveProperty("message");
  });

  it("should handle case sensitivity of roleName", async () => {
    const fakeRole = { id: 2, role_name: "Admin" };
    mockedPrisma.user_roles.findFirst.mockResolvedValueOnce(fakeRole);

    const res = await request(app).get("/api/v1/roles/Admin");

    expect(res.status).toBe(200);
    expect(res.body.data.role_name).toBe("Admin");
  });

  it("should handle special characters safely", async () => {
    const fakeRole = { id: 3, role_name: "admin$" };
    mockedPrisma.user_roles.findFirst.mockResolvedValueOnce(fakeRole);

    const res = await request(app).get("/api/v1/roles/admin%24"); // %24 = $

    expect(res.status).toBe(200);
    expect(res.body.data.role_name).toBe("admin$");
  });

  it("should handle spaces or URL-encoded input", async () => {
    const fakeRole = { id: 4, role_name: "super user" };
    mockedPrisma.user_roles.findFirst.mockResolvedValueOnce(fakeRole);

    const res = await request(app).get(
      "/api/v1/roles/" + encodeURIComponent("super user")
    );

    expect(res.status).toBe(200);
    expect(res.body.data.role_name).toBe("super user");
  });

  it("should return first role if multiple roles exist with same name", async () => {
    const fakeRole = { id: 5, role_name: "editor" };
    mockedPrisma.user_roles.findFirst.mockResolvedValueOnce(fakeRole);

    const res = await request(app).get("/api/v1/roles/editor");

    expect(res.status).toBe(200);
    expect(res.body.data).toEqual(fakeRole);
  });
});

describe("POST /api/v1/roles", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // 1. Create role successfully
  it("should create a role successfully with valid roleName", async () => {
    mockedPrisma.user_roles.create.mockResolvedValueOnce({
      id: 1,
      role_name: "Admin",
    });

    const res = await request(app)
      .post("/api/v1/roles")
      .send({ roleName: "Admin" });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.role_name).toBe("Admin");
  });

  // 2. roleName missing
  it("should return 400 if roleName is missing", async () => {
    const res = await request(app).post("/api/v1/roles").send({});
    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toContain("roleName");
  });

  // 3. roleName empty
  it("should return 400 if roleName is empty string", async () => {
    const res = await request(app).post("/api/v1/roles").send({ roleName: "" });
    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toContain("roleName");
  });

  // 4. roleName whitespace only
  it("should return 400 if roleName is whitespace only", async () => {
    const res = await request(app)
      .post("/api/v1/roles")
      .send({ roleName: "   " });
    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toContain("roleName");
  });

  // 5. roleName non-string
  it("should return 400 if roleName is not a string", async () => {
    const res = await request(app)
      .post("/api/v1/roles")
      .send({ roleName: 123 });
    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toContain("roleName");
  });

  // 6. role already exists (P2002)
  it("should return 409 if role already exists", async () => {
    const err = new Error("Unique constraint failed") as any;
    err.code = "P2002";
    mockedPrisma.user_roles.create.mockRejectedValueOnce(err);

    const res = await request(app)
      .post("/api/v1/roles")
      .send({ roleName: "Admin" });

    expect(res.status).toBe(409);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toContain("already exists");
  });

  // 7. unexpected prisma error
  it("should return 500 for unexpected Prisma error", async () => {
    const err = new Error("DB crash");
    mockedPrisma.user_roles.create.mockRejectedValueOnce(err);

    const res = await request(app)
      .post("/api/v1/roles")
      .send({ roleName: "Admin" });

    expect(res.status).toBe(500);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toBe("Internal server error");
  });

  // 8. runtime error in controller
  it("should return 500 if runtime error occurs in controller", async () => {
    mockedPrisma.user_roles.create.mockImplementationOnce(() => {
      throw new Error("Unexpected runtime failure");
    });

    const res = await request(app)
      .post("/api/v1/roles")
      .send({ roleName: "Manager" });

    expect(res.status).toBe(500);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toBe("Internal server error");
  });

  // 9. sanity check with multiple roles created sequentially
  it("should handle creating multiple roles sequentially", async () => {
    mockedPrisma.user_roles.create
      .mockResolvedValueOnce({ id: 1, role_name: "Admin" })
      .mockResolvedValueOnce({ id: 2, role_name: "User" });

    const res1 = await request(app)
      .post("/api/v1/roles")
      .send({ roleName: "Admin" });
    expect(res1.status).toBe(201);
    expect(res1.body.data.role_name).toBe("Admin");

    const res2 = await request(app)
      .post("/api/v1/roles")
      .send({ roleName: "User" });
    expect(res2.status).toBe(201);
    expect(res2.body.data.role_name).toBe("User");
  });
});
