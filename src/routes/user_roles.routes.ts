// src/routes/userRoles.routes.ts
import { Router } from "express";
import { userRolesController } from "../controllers/index.controller.js";

const {
  getUserRolesController,
  getUserRoleByNameController,
  createUserRoleController,
  updateUserRoleController,
  deactivateUserRoleController,
} = userRolesController;

const router = Router();

// GET /roles?is_active=true|false|all
router.get("/", getUserRolesController);

// GET /roles/:roleName
router.get("/:roleName", getUserRoleByNameController);

// POST /roles
router.post("/", createUserRoleController);

// PUT /roles/:roleName
router.put("/:roleName", updateUserRoleController);

// DELETE /roles/:roleName/deactivate
router.delete("/:roleName/deactivate", deactivateUserRoleController);

export default router;
