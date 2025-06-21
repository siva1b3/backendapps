import { Request, Response, NextFunction } from "express";

export default function basicErrorHandler(
  err: any,
  _: Request,
  res: Response,
  __: NextFunction
) {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  console.error("Error:", message);
  console.error("Stack Trace:", err.stack);

  res.status(statusCode).json({ message });
}
