import type { Request, Response } from "express";
import prisma from "./prisma/prisma.js";
import app from "./app.js";

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.get("/", (_: Request, res: Response) => {
  res.status(200).send("Hello, World!");
});

app.listen(PORT, async () => {
  try {
    await prisma.$connect();
    console.log("Connected to the database successfully.");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
