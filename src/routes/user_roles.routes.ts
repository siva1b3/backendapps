// src/routes/userRoles.routes.ts
import { Router } from "express";
import { userRolesController } from "../controllers/index.controller.js";

const {
  getUserRoles,
  getUserRoleByName,
  createUserRole,
  updateUserRole,
  deactivateUserRole,
} = userRolesController;

const router = Router();

// GET /roles?is_active=true|false|all
router.get("/", getUserRoles);

// GET /roles/:roleName
router.get("/:roleName", getUserRoleByName);

// POST /roles
router.post("/", createUserRole);

// PUT /roles/:roleName
router.put("/:roleName", updateUserRole);

// PATCH /roles/:roleName/deactivate
router.patch("/:roleName/deactivate", deactivateUserRole);

export default router;
