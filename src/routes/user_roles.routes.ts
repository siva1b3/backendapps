import { Router } from "express";

import {userRolesController} from "../controllers/index.controller.js"

const userRolesRouter = Router();

userRolesRouter.get("/user_roles_list", userRolesController.getUserRolesListController);

userRolesRouter.post("/create_user_role", userRolesController.createUserRoleController);

export default userRolesRouter;