import prisma from "../prismaClient/Prisma.ts";
import { stc_status } from "../prisma/client.ts";
import { customError } from "../errors/errors.ts";

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

const statusService = {
  getStatusListService,
};

export default statusService;
