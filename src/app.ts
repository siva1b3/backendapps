import express from 'express';
import cors from 'cors';

import {userRolesRouter} from "./routes/index.routes.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", userRolesRouter);

export default app;
