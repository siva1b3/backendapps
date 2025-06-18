import app from "./app.js";
import { Request, Response } from "express";

app.get("/", (_: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(3000, async () => {
  console.log("Server is running on http://localhost:3000");
});
