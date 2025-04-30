import { Request, Response, NextFunction } from "express";
import {
  ClientErrorStatus,
  ResponseStatus,
  ServerErrorStatus,
} from "../enums/index.enum.js";
import { a0_task } from "@prisma/client";
import { taskService } from "../services/index.service.js";
import { responseType } from "../types/types.index.js";

const getAllTasks = async (_: Request, res: Response, next: NextFunction) => {
  try {
    // ! before calling the service

    const tasks: a0_task[] = await taskService.getallTasks();

    // * after calling the service

    if (!tasks || tasks.length === 0) {
      res.status(ClientErrorStatus.NOT_FOUND).json({
        success: false,
        error: "No tasks found",
      } as responseType);
    }

    const tasksWithStringIds = tasks.map((task) => ({
      ...task,
      task_id: task.task_id.toString(), // Convert BigInt to string
    }));

    res
      .status(ResponseStatus.OK)
      .json({ success: true, body: [...tasksWithStringIds] } as responseType);
  } catch (error: any) {
    next({
      message:
        error.message || "An unexpected error occurred while fetching tasks",
      status: error.statusCode || ServerErrorStatus.INTERNAL_SERVER_ERROR,
    });
  }
};

const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task_data: a0_task = req.body as a0_task;

    if (!task_data) {
      res.status(ClientErrorStatus.BAD_REQUEST).json({
        success: false,
        error: "Task data is required",
      } as responseType);
    }

    // ! before calling the service
    const createdTask = await taskService.createtask(task_data);
    // * after calling the service

    if (!createdTask) {
      res.status(ServerErrorStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: "Failed to create the task",
      } as responseType);
    }

    const taskWithStringId = {
      ...createdTask,
      task_id: createdTask.task_id.toString(), // Convert BigInt to string
    };

    res.status(ResponseStatus.CREATED).json({
      success: true,
      body: { ...taskWithStringId },
    } as responseType);
  } catch (error: any) {
    next({
      message: error.message || "An error occurred while creating the task",
      status: error.statusCode || 500,
    });
  }
};

const getTaskById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params as unknown as { id: number };
    if (!id) {
      res
        .status(ClientErrorStatus.BAD_REQUEST)
        .json({ success: false, error: "Task ID is required" } as responseType);
    }

    // ! before calling the service

    const task: a0_task | null = await taskService.gettaskById(id);

    if (!task) {
      res.status(ClientErrorStatus.NOT_FOUND).json({ error: "Task not found" });
    }

    const taskWithStringId = {
      ...task,
      task_id: task?.task_id.toString(), // Convert BigInt to string
    };

    res.status(ResponseStatus.OK).json(taskWithStringId);
  } catch (error: any) {
    next({
      message: error.message || "An error occurred while fetching the task",
      status: error.statusCode || 500,
    });
  }
};

const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params as unknown as { id: number };
    if (!id) {
      res
        .status(ClientErrorStatus.BAD_REQUEST)
        .json({ error: "Task ID is required" });
    }

    const task_data: a0_task = req.body as a0_task;
    if (!task_data) {
      res
        .status(ClientErrorStatus.BAD_REQUEST)
        .json({ error: "Task data is required" });
    }

    // ! before calling the service
    const updatedTask = await taskService.updatetask(id, task_data);
    if (!updatedTask) {
      res
        .status(ClientErrorStatus.NOT_FOUND)
        .json({ error: "Task not found or could not be updated" });
    }

    const taskWithStringId = {
      ...updatedTask,
      task_id: updatedTask.task_id.toString(), // Convert BigInt to string
    };

    res.status(ResponseStatus.OK).json({
      message: "Task updated successfully",
      task: taskWithStringId,
    });
  } catch (error: any) {
    next({
      message: error.message || "An error occurred while updating the task",
      status: error.statusCode || 500,
    });
  }
};

const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params as unknown as { id: number };
    if (!id) {
      res
        .status(ClientErrorStatus.BAD_REQUEST)
        .json({ error: "Task ID is required" });
    }
    // ! before calling the service
    const deletedTask = await taskService.deletetask(id);
    if (!deletedTask) {
      res.status(ClientErrorStatus.NOT_FOUND).json({ error: "Task not found" });
    }

    const taskWithStringId = {
      ...deletedTask,
      task_id: deletedTask.task_id.toString(), // Convert BigInt to string
    };

    res
      .status(ResponseStatus.OK)
      .json({ message: "Task deleted successfully", task: taskWithStringId });
  } catch (error: any) {
    next({
      message: error.message || "An error occurred while deleting the task",
      status: error.statusCode || 500,
    });
  }
};

const taskController = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};

export default taskController;
