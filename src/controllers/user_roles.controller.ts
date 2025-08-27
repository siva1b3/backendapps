import type {Request,Response} from "express";
import {userRolesService} from "../services/index.service.js"

const getUserRolesListController = async (_: Request, res: Response) => {
  try {
    // Simulate fetching user roles from a database or service
    const userRoles = await userRolesService.getUserRolesService();
    res.status(200).json(userRoles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user roles", error });
  }
}

const createUserRoleController = async (req: Request, res: Response) => {
  const { role_name } = (req.query ?? {}) as { role_name?: string };
  if (!role_name) {
    return res.status(400).json({ message: "Role name is required" });
  } 
  try {
    const newUserRole = await userRolesService.createUserRoleService(role_name);
    res.status(201).json(newUserRole);
  } catch (error) {
    res.status(500).json({ message: "Error creating user role", error }); 
  }
};

const userRolesController = {
  getUserRolesListController,
  createUserRoleController,
};

export default userRolesController;