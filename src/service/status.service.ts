import prisma from "../PrismaComponet/Prisma.js";
import { stc_status } from "../../generated/client.js";

const getStatusList = async (): Promise<stc_status[]> => {
  try {
    const statusList: stc_status[] = await prisma.stc_status.findMany();
    if (!statusList || statusList.length === 0) {
      throw new Error("No status found");
    }
    return statusList;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error fetching status list: ${error.message}`);
    } else {
      throw new Error("Unknown error fetching status list");
    }
  }
};

const statusService = {
  getStatusList,
};

export default statusService;
