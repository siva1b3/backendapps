// db/client.ts
import prisma from "../prisma/prisma.js";

// Fetch all active roles
async function getUserRoles() {
  try {
    return await prisma.user_roles.findMany({
      where: { is_active: true },
    });
  } catch (error) {
    console.error("Error fetching user roles:", error);
    throw error;
  }
}

// Fetch one role by name
async function getOneUserRole(roleName: string) {
  try {
    return await prisma.user_roles.findUnique({
      where: { role_name: roleName },
    });
  } catch (error) {
    console.error(`Error fetching role "${roleName}":`, error);
    throw error;
  }
}

// Create a new role
async function createUserRole(roleName: string) {
  try {
    return await prisma.user_roles.create({
      data: { role_name: roleName },
    });
  } catch (error) {
    console.error(`Error creating role "${roleName}":`, error);
    throw error;
  }
}

// Update role name
async function updateUserRole(oldRoleName: string, newRoleName: string) {
  try {
    return await prisma.user_roles.update({
      where: { role_name: oldRoleName },
      data: { role_name: newRoleName },
    });
  } catch (error) {
    console.error(
      `Error updating role from "${oldRoleName}" to "${newRoleName}":`,
      error
    );
    throw error;
  }
}

// Soft delete role
async function deactivateUserRole(roleName: string) {
  try {
    return await prisma.user_roles.update({
      where: { role_name: roleName },
      data: { is_active: false },
    });
  } catch (error) {
    console.error(`Error deactivating role "${roleName}":`, error);
    throw error;
  }
}

const userRolesService = {
  getUserRoles,
  getOneUserRole,
  createUserRole,
  updateUserRole,
  deactivateUserRole,
};

export default userRolesService;
