import { Router } from "express";

import { userRolesController } from "../controllers/index.controller.js";

const {
  getUserRoles,
  getOneUserRole,
  createUserRole,
  updateUserRole,
  deactivateUserRole,
} = userRolesController;

const userRolesRouter = Router();

// GET /roles - fetch all active roles
userRolesRouter.get("/", getUserRoles);

// GET /roles/:roleName - fetch one role
userRolesRouter.get("/:roleName", getOneUserRole);

// POST /roles - create a new role
userRolesRouter.post("/", createUserRole);

// PUT /roles - update role name
userRolesRouter.put("/", updateUserRole);

// PATCH /roles/:roleName/deactivate - soft delete
userRolesRouter.patch("/:roleName/deactivate", deactivateUserRole);

export default userRolesRouter;
