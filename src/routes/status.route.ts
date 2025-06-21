import { Router, Request, Response } from "express";
import { statusController } from "../controllers/controller.ts";

const statusRouter = Router();

statusRouter.get("/statusList", statusController.getStstusListController);

statusRouter.post("/status", statusController.createStatusController);

statusRouter
  .route("/status/:app_status")
  .get(statusController.getStatusByapp_statusController)
  .patch(statusController.updateStatusByapp_statusController)
  .delete((req: Request, res: Response) => {
    res.status(200).send(`DELETE status with ID ${req.params.id}`);
  });

export default statusRouter;
