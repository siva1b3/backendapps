// src/app.ts
import express from "express";
import cors from "cors";
import { userRolesRouter } from "./routes/index.routes.js";
import {
  errorHandler,
  notFoundHandler,
  requestLogger,
} from "./middlewares/index.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.use("/api/v1/user_roles", userRolesRouter);

// 404 and error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
