// tests/userRolesService.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest";
import { userRolesService } from "../../src/services/index.service"; // adjust path if needed
import prisma from "../../src/prisma/prisma";

// ✅ Mock prisma module
vi.mock("../../src/prisma/prisma", () => ({
  default: {
    user_roles: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
  },
}));

const mockRole = {
  role_name: "Admin",
  role_description: "Administrator role",
  is_active: true,
  created_time: new Date(),
  modified_time: null,
  modified_reason: null,
};

describe("userRolesService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getUserRoles", () => {
    it("should return all active roles", async () => {
      (prisma.user_roles.findMany as any).mockResolvedValue([mockRole]);

      const result = await userRolesService.getUserRoles();
      expect(result).toEqual([mockRole]);
      expect(prisma.user_roles.findMany).toHaveBeenCalledWith({
        where: { is_active: true },
      });
    });

    it("should return empty array if no active roles exist", async () => {
      (prisma.user_roles.findMany as any).mockResolvedValue([]);

      const result = await userRolesService.getUserRoles();
      expect(result).toEqual([]);
    });

    it("should throw error if prisma fails", async () => {
      (prisma.user_roles.findMany as any).mockRejectedValue(
        new Error("DB error")
      );

      await expect(userRolesService.getUserRoles()).rejects.toThrow("DB error");
    });
  });

  describe("getOneUserRole", () => {
    it("should return one role if found", async () => {
      (prisma.user_roles.findUnique as any).mockResolvedValue(mockRole);

      const result = await userRolesService.getOneUserRole("Admin");
      expect(result).toEqual(mockRole);
    });

    it("should return null if role not found", async () => {
      (prisma.user_roles.findUnique as any).mockResolvedValue(null);

      const result = await userRolesService.getOneUserRole("Unknown");
      expect(result).toBeNull();
    });

    it("should throw error if prisma fails", async () => {
      (prisma.user_roles.findUnique as any).mockRejectedValue(
        new Error("DB error")
      );

      await expect(userRolesService.getOneUserRole("Admin")).rejects.toThrow(
        "DB error"
      );
    });
  });

  describe("createUserRole", () => {
    it("should create a new role", async () => {
      (prisma.user_roles.create as any).mockResolvedValue(mockRole);

      const result = await userRolesService.createUserRole("Admin");
      expect(result).toEqual(mockRole);
    });

    it("should throw error if role already exists", async () => {
      (prisma.user_roles.create as any).mockRejectedValue(
        new Error("Unique constraint")
      );

      await expect(userRolesService.createUserRole("Admin")).rejects.toThrow(
        "Unique constraint"
      );
    });
  });

  describe("updateUserRole", () => {
    it("should update role name", async () => {
      const updatedRole = { ...mockRole, role_name: "SuperAdmin" };
      (prisma.user_roles.update as any).mockResolvedValue(updatedRole);

      const result = await userRolesService.updateUserRole(
        "Admin",
        "SuperAdmin"
      );
      expect(result).toEqual(updatedRole);
    });

    it("should throw error if role does not exist", async () => {
      (prisma.user_roles.update as any).mockRejectedValue(
        new Error("Record not found")
      );

      await expect(
        userRolesService.updateUserRole("Unknown", "SuperAdmin")
      ).rejects.toThrow("Record not found");
    });
  });

  describe("deactivateUserRole", () => {
    it("should deactivate a role", async () => {
      const deactivatedRole = { ...mockRole, is_active: false };
      (prisma.user_roles.update as any).mockResolvedValue(deactivatedRole);

      const result = await userRolesService.deactivateUserRole("Admin");
      expect(result).toEqual(deactivatedRole);
    });

    it("should throw error if role does not exist", async () => {
      (prisma.user_roles.update as any).mockRejectedValue(
        new Error("Record not found")
      );

      await expect(
        userRolesService.deactivateUserRole("Unknown")
      ).rejects.toThrow("Record not found");
    });
  });
});
