import app from "./app.js";
import { Request, Response } from "express";

// Basic Route
app.get("/", (_: Request, res: Response) => {
  res.status(200).send("Hello, World!");
});

// Start the server
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
