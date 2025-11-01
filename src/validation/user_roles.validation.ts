import { z } from "zod";

export const createUserRoleSchema = z.object({
  roleName: z.string().min(1, "roleName is required and cannot be empty"),
});

export const updateUserRoleSchema = z.object({
  newRoleName: z.string().min(1, "newRoleName is required and cannot be empty"),
});

const userRolesValidation = {
  createUserRoleSchema,
  updateUserRoleSchema,
};

export default userRolesValidation;
