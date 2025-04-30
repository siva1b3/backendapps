import prisma from "../prisma/index.prisma.js";
import { a0_task } from "@prisma/client";

const getallTasks = async () => {
  try {
    const tasks: a0_task[] = await prisma.a0_task.findMany();
    return tasks;
  } catch (error: any) {
    console.error("Error fetching tasks:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    error.statusCode = error.statusCode || 500;
    throw new Error(`Failed to fetch tasks: ${error.message}`);
  }
};

const createtask = async (task: a0_task) => {
  try {
    const newTask: a0_task = await prisma.a0_task.create({
      data: task,
    });
    return newTask;
  } catch (error: any) {
    console.error("Error creating task:", error);
    error.statusCode = error.statusCode || 500;
    error.message = error.message || "Failed to create task";
    throw new Error(error.message);
  }
};

const gettaskById = async (id: number) => {
  try {
    const task: a0_task | null = await prisma.a0_task.findUnique({
      where: { task_id: id },
    });
    return task;
  } catch (error: any) {
    console.error("Error fetching task by ID:", error);
    error.statusCode = error.statusCode || 500;
    error.message = error.message || "Task not found";
    throw new Error(error.message);
  }
};

const updatetask = async (id: number, task: a0_task) => {
  try {
    const existingTask = await prisma.a0_task.findUnique({
      where: { task_id: id },
    });

    if (!existingTask) {
      throw new Error(`Task with ID ${id} does not exist.`);
    }

    const updatedTask: a0_task = await prisma.a0_task.update({
      where: { task_id: id },
      data: task,
    });
    return updatedTask;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

const deletetask = async (id: number) => {
  try {
    const existingTask = await prisma.a0_task.findUnique({
      where: { task_id: id },
    });

    if (!existingTask) {
      throw new Error(`Task with ID ${id} does not exist.`);
    }

    const deletedTask: a0_task = await prisma.a0_task.delete({
      where: { task_id: id },
    });
    return deletedTask;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

const taskService = {
  getallTasks,
  createtask,
  gettaskById,
  updatetask,
  deletetask,
};

export default taskService;
