import prisma from "../prismaClient/Prisma.ts";

const getStatusListService = async () => {
  return await prisma.stc_status.findMany();
};

const statusService = {
  getStatusListService,
};

export default statusService;
