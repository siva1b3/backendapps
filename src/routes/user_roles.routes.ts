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

// ✅ consistent naming -> user-roles
router.get("/", getUserRolesController);
router.get("/:roleName", getUserRoleByNameController);
router.post("/", createUserRoleController);
router.put("/:roleName", updateUserRoleController);
router.delete("/:roleName/deactivate", deactivateUserRoleController);

export default router;
