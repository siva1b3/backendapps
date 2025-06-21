import prisma from "../prismaClient/Prisma.ts";
import { stc_status } from "../prisma/client.ts";
import { customError } from "../errors/errors.ts";
import { get } from "http";

const getStatusListService = async (): Promise<stc_status[]> => {
  try {
    const statuses = await prisma.stc_status.findMany();
    if (!statuses || statuses.length === 0) {
      throw customError("No statuses found", 404);
    }
    return statuses;
  } catch (error: any) {
    throw error.statusCode
      ? error
      : customError("Failed to fetch status list", 500);
  }
};

const getStatusByapp_statusService = async (app_status: string) => {
  try {
    const status = await prisma.stc_status.findUnique({
      where: { app_status },
    });

    if (!status) {
      throw customError("Status not found", 404);
    }

    return status;
  } catch (error: any) {
    throw error.statusCode ? error : customError("Failed to fetch status", 500);
  }
};

const createStatusService = async (data: stc_status) => {
  try {
    const existingStatus = await prisma.stc_status.findUnique({
      where: {
        app_status: data.app_status,
      },
    });

    if (existingStatus) {
      throw customError("Status already exists", 400);
    }

    const newStatus = await prisma.stc_status.create({
      data,
    });
    return newStatus;
  } catch (error: any) {
    throw error.statusCode
      ? error
      : customError("Failed to create status", 500);
  }
};

const updateStatusByapp_statusService = async (
  data: stc_status,
  app_status: string
) => {
  try {
    const existingStatus = await prisma.stc_status.findUnique({
      where: {
        app_status: app_status,
      },
    });

    if (!existingStatus) {
      throw customError("Status not exists", 400);
    }

    const updatedStatus = await prisma.stc_status.update({
      where: { app_status: app_status },
      data,
    });

    if (!updatedStatus) {
      throw customError("Failed to update status", 500);
    }

    return updatedStatus;
  } catch (error: any) {
    throw error.statusCode
      ? error
      : customError("Failed to update status", 500);
  }
};

const statusService = {
  getStatusListService,
  getStatusByapp_statusService,
  createStatusService,
  updateStatusByapp_statusService,
};

export default statusService;
