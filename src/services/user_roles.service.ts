import prisma from "../prisma/prisma.js";

const getUserRolesService = async () => {
  try {
    const userRoles = await prisma.user_roles.findMany({
      where: { is_active: true },
    });
    return userRoles;
  } catch (error) {
    console.error("Error fetching user roles:", error);
    throw error;
  }
};

const createUserRoleService = async (user_role: string) => {
  try {
    const newUserRole = await prisma.user_roles.create({
        data: { role_name:user_role },
    });
    return newUserRole;
  } catch (error) {
    console.error("Error creating user role:", error);
    throw error;
  }
};

const userRolesService = {
  getUserRolesService,
  createUserRoleService,
};

export default userRolesService;
