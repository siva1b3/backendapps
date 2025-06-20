import { Router, Request, Response } from "express";
import { statusController } from "../controllers/controller.ts";

const statusRouter = Router();

statusRouter.get("/statusList", statusController.getStstusListController);

statusRouter.post("/status", (_: Request, res: Response) => {
  res.status(200).send("POST new status");
});

statusRouter
  .route("/status/:id")
  .get((req: Request, res: Response) => {
    res.status(200).send(`GET status with ID ${req.params.id}`);
  })
  .patch((req: Request, res: Response) => {
    res.status(200).send(`PATCH status with ID ${req.params.id}`);
  })
  .delete((req: Request, res: Response) => {
    res.status(200).send(`DELETE status with ID ${req.params.id}`);
  });

export default statusRouter;
