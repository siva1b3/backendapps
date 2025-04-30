import { Request, Response, NextFunction } from "express";
import { responseType } from "../types/types.index.js";

const errorHandler = (
  err: any,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  console.error(err.stack);

  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    error: message,
  } as responseType);
};

export default errorHandler;
