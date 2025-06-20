import { Request, Response, NextFunction } from "express";
import { statusService } from "../services/services.ts";

const getStstusListController = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json(await statusService.getStatusListService());
  } catch (error) {
    next(error);
  }
};
const statusController = {
  getStstusListController,
};

export default statusController;
