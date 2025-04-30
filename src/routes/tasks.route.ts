import express from "express";
import { taskController } from "../controllers/index.controller.js";

const taskRouter = express.Router();

// GET /tasks - Get all tasks
taskRouter.get("/tasks", taskController.getAllTasks);

// POST /task - Create new task
taskRouter.post("/task", taskController.createTask);

// Consolidated single task operations
taskRouter
  .route("/task/:id")
  .get(taskController.getTaskById)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);

export default taskRouter;
