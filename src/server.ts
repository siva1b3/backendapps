import app from "./app.js";

import prisma from "./prismaClient/Prisma.js";

app.listen(3000, async () => {
  const result = await prisma.a0_task.findMany();
  console.log("Fetched tasks:", result);
  console.log("Server is running on http://localhost:3000");
});
