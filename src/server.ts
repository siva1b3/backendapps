import type {Request,Response} from "express";
import prisma from "./prisma/prisma.js"

import app from './app.js';

const PORT = 3000;

app.get('/', (_:Request, res:Response) => {
  res.status(200).send('Hello, World!');    
});

app.listen(PORT, async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});