// src/controllers/userRoles.controller.ts
import { Request, Response, NextFunction } from "express";
import { userRolesService } from "../services/index.service.js";
import ApiError from "../utils/ApiError.js";

const {
  getUserRolesService,
  getUserRoleByNameService,
  createUserRoleService,
  updateUserRoleService,
  deactivateUserRoleService,
} = userRolesService;

// GET all roles
export async function getUserRolesController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const isActive = (req.query.is_active as string) ?? "true";
    if (!["true", "false", "all"].includes(isActive)) {
      throw new ApiError(400, "is_active must be 'true', 'false', or 'all'");
    }
    const roles = await getUserRolesService(isActive);
    res.status(200).json({ success: true, data: roles });
  } catch (error) {
    next(error);
  }
}

// GET single role
export async function getUserRoleByNameController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { roleName } = req.params;
    if (!roleName) throw new ApiError(400, "roleName is required");

    const role = await getUserRoleByNameService(roleName);
    if (!role) throw new ApiError(404, "Role not found");

    res.status(200).json({ success: true, data: role });
  } catch (error) {
    next(error);
  }
}

// CREATE role
export async function createUserRoleController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { roleName } = req.body;

    if (typeof roleName !== "string" || roleName.trim().length === 0) {
      throw new ApiError(
        400,
        "roleName is required and must be a non-empty string"
      );
    }

    const role = await createUserRoleService(roleName);
    res.status(201).json({ success: true, data: role });
  } catch (error) {
    next(error);
  }
}

// UPDATE role
export async function updateUserRoleController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { roleName } = req.params;
    const { newRoleName } = req.body;

    if (
      typeof roleName !== "string" ||
      roleName.trim().length === 0 ||
      typeof newRoleName !== "string" ||
      newRoleName.trim().length === 0
    ) {
      throw new ApiError(
        400,
        "Both roleName (param) and newRoleName (body) are required and must be non-empty strings"
      );
    }

    const updatedRole = await updateUserRoleService(roleName, newRoleName);
    res.status(200).json({ success: true, data: updatedRole });
  } catch (error) {
    next(error);
  }
}

// DEACTIVATE role
export async function deactivateUserRoleController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { roleName } = req.params;
    if (typeof roleName !== "string" || roleName.trim().length === 0) {
      throw new ApiError(
        400,
        "roleName is required and must be a non-empty string"
      );
    }
    const role = await deactivateUserRoleService(roleName);
    res.status(200).json({ success: true, data: role });
  } catch (error) {
    next(error);
  }
}
