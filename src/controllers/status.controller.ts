import { Request, Response, NextFunction } from "express";
import { statusService } from "../services/services.ts";
import { customError } from "../errors/errors.ts";

const getStstusListController = async (
  _: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    res.status(200).json(await statusService.getStatusListService());
  } catch (error) {
    next(error);
  }
};

const createStatusController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newStatus = await statusService.createStatusService(req.body);
    res.status(201).json(newStatus);
  } catch (error) {
    next(error);
  }
};

const statusController = {
  getStstusListController,
  createStatusController,
};

export default statusController;
