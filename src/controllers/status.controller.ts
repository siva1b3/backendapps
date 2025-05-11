import { Request, Response, NextFunction } from "express";
import { statusService } from "../service/index.service.js";

const getStatusList = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const statusList = await statusService.getStatusList();
    res.status(200).json(statusList);
  } catch (error) {
    next(error);
  }
};

const statusController = {
  getStatusList,
};

export default statusController;
