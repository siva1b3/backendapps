// src/app.ts
import express from "express";
import cors from "cors";
import { userRolesRouter } from "./routes/index.routes.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/roles", userRolesRouter);

// 404 and error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
