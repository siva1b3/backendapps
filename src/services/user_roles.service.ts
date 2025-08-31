// src/services/userRoles.service.ts
import prisma from "../prisma/prisma.js";
import ApiError from "../utils/ApiError.js";

// GET all roles
export async function getUserRolesService(isActive: string) {
  if (isActive === "all") {
    return prisma.user_roles.findMany();
  }
  return prisma.user_roles.findMany({
    where: { is_active: isActive === "true" },
  });
}

// GET single role
export async function getUserRoleByNameService(roleName: string) {
  return prisma.user_roles.findFirst({
    where: { role_name: roleName },
  });
}

// CREATE role
export async function createUserRoleService(roleName: string) {
  try {
    return await prisma.user_roles.create({
      data: { role_name: roleName },
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      throw new ApiError(409, `Role "${roleName}" already exists`);
    }
    throw error;
  }
}

// UPDATE role
export async function updateUserRoleService(
  oldRoleName: string,
  newRoleName: string
) {
  try {
    return await prisma.user_roles.update({
      where: { role_name: oldRoleName },
      data: { role_name: newRoleName },
    });
  } catch (error: any) {
    if (error.code === "P2025") {
      throw new ApiError(404, `Role "${oldRoleName}" not found`);
    }
    if (error.code === "P2002") {
      throw new ApiError(409, `Role "${newRoleName}" already exists`);
    }
    throw error;
  }
}

// DEACTIVATE role
export async function deactivateUserRoleService(roleName: string) {
  try {
    return await prisma.user_roles.update({
      where: { role_name: roleName },
      data: { is_active: false },
    });
  } catch (error: any) {
    if (error.code === "P2025") {
      throw new ApiError(404, `Role "${roleName}" not found`);
    }
    throw error;
  }
}
