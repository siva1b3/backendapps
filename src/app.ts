import express from "express";
import cors from "cors";
import { statusRouter } from "./routes/index.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/v1", statusRouter);

export default app;
