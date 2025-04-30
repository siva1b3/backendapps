import express from "express";
import itemRoutes from "./itemRoutes.js";
import { errorHandler } from "./errorHandler.js";

const app = express();

app.use(express.json());

app.use("/items", itemRoutes);

app.use(errorHandler); // optional

export default app;
