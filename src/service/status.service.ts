import prisma from "../PrismaComponet/Prisma.js";

const getStatusList = async () => {
  try {
    const statusList = await prisma.stc_status.findMany();
    if (!statusList) {
      throw new Error("No status found");
    }
    return statusList;
  } catch (error) {
    throw new Error("Error fetching status list");
  }
};

const statusService = {
  getStatusList,
};

export default statusService;
