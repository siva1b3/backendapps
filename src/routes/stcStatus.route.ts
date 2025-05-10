import { Router, Request, Response } from "express";

const router = Router();

router.get("/status", (_: Request, res: Response) => {
  res.status(200).json({ status: "ok", data: ["item1", "item2"] });
});

router.get("/status/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res
    .status(200)
    .json({ status: "ok", message: `Fetched status with id ${id}` });
});

router.post("/status", (req: Request, res: Response) => {
  const newData = req.body;
  res
    .status(200)
    .json({ status: "ok", message: "Created new status", data: newData });
});

router.put("/status/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData = req.body;
  res.status(200).json({
    status: "ok",
    message: `Updated status ${id}`,
    data: updatedData,
  });
});

router.delete("/status/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res
    .status(200)
    .json({ status: "ok", message: `Deleted status with id ${id}` });
});

export const statusRouter = router;
