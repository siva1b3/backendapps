import { Router, Request, Response } from "express";
import { statusController } from "../controllers/index.controller.js";

const statusRouter = Router();

statusRouter.get("/status", statusController.getStatusList);

statusRouter.get("/status/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res
    .status(200)
    .json({ status: "ok", message: `Fetched status with id ${id}` });
});

statusRouter.post("/status", (req: Request, res: Response) => {
  const newData = req.body;
  res
    .status(200)
    .json({ status: "ok", message: "Created new status", data: newData });
});

statusRouter.put("/status/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData = req.body;
  res.status(200).json({
    status: "ok",
    message: `Updated status ${id}`,
    data: updatedData,
  });
});

statusRouter.delete("/status/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res
    .status(200)
    .json({ status: "ok", message: `Deleted status with id ${id}` });
});

export default statusRouter;
