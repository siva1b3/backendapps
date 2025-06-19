import express from "express";
import cors from "cors";

import { statusRouter } from "./routes/routes.ts";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", statusRouter);

export default app;
