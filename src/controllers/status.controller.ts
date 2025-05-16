import { Request, Response, NextFunction } from "express";
import { statusService } from "../service/index.service.js";
import { stc_status } from "../../generated/client.js";

const getStatusList = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const statusList: stc_status[] = await statusService.getStatusList();
    res.status(200).json(statusList);
  } catch (error) {
    next(error);
  }
};

const statusController = {
  getStatusList,
};

export default statusController;
