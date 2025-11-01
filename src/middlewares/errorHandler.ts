// src/middlewares/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import ApiError from "../utils/ApiError.js";

export default function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  console.error("Unexpected error:", err);
  return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
}
