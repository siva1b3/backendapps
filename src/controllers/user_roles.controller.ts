// src/controllers/userRoles.controller.ts
import { Request, Response, NextFunction } from "express";
import { userRolesService } from "../services/index.service.js";
import ApiError from "../utils/ApiError.js";

// GET all roles
export async function getUserRoles(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const isActive = (req.query.is_active as string) ?? "true";
    if (!["true", "false", "all"].includes(isActive)) {
      throw new ApiError(400, "is_active must be 'true', 'false', or 'all'");
    }
    const roles = await userRolesService.getUserRoles(isActive);
    res.status(200).json({ success: true, data: roles });
  } catch (error) {
    next(error);
  }
}

// GET single role
export async function getUserRoleByName(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { roleName } = req.params;
    if (!roleName) throw new ApiError(400, "roleName is required");

    const role = await userRolesService.getUserRoleByName(roleName);
    if (!role) throw new ApiError(404, "Role not found");

    res.status(200).json({ success: true, data: role });
  } catch (error) {
    next(error);
  }
}

// CREATE role
export async function createUserRole(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { roleName } = req.body;
    if (!roleName) throw new ApiError(400, "roleName is required");

    const role = await userRolesService.createUserRole(roleName);
    res.status(201).json({ success: true, data: role });
  } catch (error) {
    next(error);
  }
}

// UPDATE role
export async function updateUserRole(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { roleName } = req.params;
    const { newRoleName } = req.body;

    if (!roleName || !newRoleName) {
      throw new ApiError(
        400,
        "Both roleName (param) and newRoleName (body) are required"
      );
    }

    const updatedRole = await userRolesService.updateUserRole(
      roleName,
      newRoleName
    );
    res.status(200).json({ success: true, data: updatedRole });
  } catch (error) {
    next(error);
  }
}

// DEACTIVATE role
export async function deactivateUserRole(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { roleName } = req.params;
    if (!roleName) throw new ApiError(400, "roleName is required");

    const role = await userRolesService.deactivateUserRole(roleName);
    res.status(200).json({ success: true, data: role });
  } catch (error) {
    next(error);
  }
}
