import { Router, Request, Response } from "express";

const statusRouter = Router();

// Health check route
statusRouter.get("/statusList", (_: Request, res: Response) => {
  res.status(200).json({ message: "Service is up and running!" });
});

statusRouter.post("/status", (_: Request, res: Response) => {
  res.status(200).json({ message: "Service is up and running!" });
});

statusRouter
  .route("/status/:id")
  .get((_: Request, res: Response) => {
    res.status(200).json({ message: `Fetching status with ID:` });
  })
  .put((_: Request, res: Response) => {
    res.status(200).json({ message: `Fetching status with ID:` });
  })
  .delete((_: Request, res: Response) => {
    res.status(200).json({ message: `Fetching status with ID:` });
  });

export default statusRouter;
