import express from "express";
import cors from "cors";

import { statusRouter } from "./routes/routes.ts";
import { basicErrorHandler } from "./errors/errors.ts";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", statusRouter);

app.use(basicErrorHandler);

export default app;
