import { Request, Response } from "express";
import { userRolesService } from "../services/index.service.js";

// ✅ Fetch all active roles
async function getUserRoles(req: Request, res: Response) {
  let isactive = req.query.is_active as string | undefined;

  if (isactive === undefined) {
    isactive = "true"; // default
  }

  if (!["true", "false", "all"].includes(isactive)) {
    return res.status(400).json({
      success: false,
      message: "is_active must be 'true', 'false', or 'all'",
    });
  }

  try {
    const roles = await userRolesService.getUserRoles(isactive);

    if (!roles || roles.length === 0) {
      return res.status(404).json({
        success: false,
        message:
          isactive === "true"
            ? "No active roles found"
            : isactive === "false"
            ? "No inactive roles found"
            : "No roles found",
      });
    }

    res.status(200).json({ success: true, data: roles });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch roles" });
  }
}

// ✅ Fetch single role by name
async function getOneUserRole(req: Request, res: Response) {
  const { roleName } = req.params;
  if (!roleName) {
    return res
      .status(400)
      .json({ success: false, message: "roleName is required" });
  }

  try {
    const role = await userRolesService.getOneUserRole(roleName);

    if (!role) {
      return res
        .status(404)
        .json({ success: false, message: "Role not found" });
    }

    res.status(200).json({ success: true, data: role });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch role" });
  }
}

// ✅ Create role
async function createUserRole(req: Request, res: Response) {
  const { roleName } = req.body;
  if (!roleName) {
    return res
      .status(400)
      .json({ success: false, message: "roleName is required" });
  }
  try {
    const role = await userRolesService.createUserRole(roleName);
    res.status(201).json({ success: true, data: role });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create role" });
  }
}

// ✅ Update role
async function updateUserRole(req: Request, res: Response) {
  const { oldRoleName, newRoleName } = req.body;
  if (!oldRoleName || !newRoleName) {
    return res.status(400).json({
      success: false,
      message: "Both oldRoleName and newRoleName are required",
    });
  }
  try {
    const updatedRole = await userRolesService.updateUserRole(
      oldRoleName,
      newRoleName
    );
    res.status(200).json({ success: true, data: updatedRole });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update role" });
  }
}

// ✅ Deactivate role
async function deactivateUserRole(req: Request, res: Response) {
  const { roleName } = req.params;
  if (!roleName) {
    return res
      .status(400)
      .json({ success: false, message: "roleName is required" });
  }
  try {
    const role = await userRolesService.deactivateUserRole(roleName);
    res.status(200).json({ success: true, data: role });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to deactivate role" });
  }
}

const userRolesController = {
  getUserRoles,
  getOneUserRole,
  createUserRole,
  updateUserRole,
  deactivateUserRole,
};

export default userRolesController;
