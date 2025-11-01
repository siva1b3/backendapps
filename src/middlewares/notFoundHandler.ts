// src/middlewares/notFoundHandler.ts
import { Request, Response, NextFunction } from "express";

export default function notFoundHandler(
  req: Request,
  res: Response,
  _next: NextFunction
) {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
}
