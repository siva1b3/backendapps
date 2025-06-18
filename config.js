import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Remove and recreate the dist folder to ensure a clean build output.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folderPath = path.join(__dirname, "dist");

if (fs.existsSync(folderPath)) {
  fs.rmSync(folderPath, { recursive: true, force: true });
  console.log("Folder deleted successfully.");
} else {
  console.log("Folder does not exist.");
}

// Copy the src/prisma directory to dist/prisma because the TypeScript compiler does not emit non-code assets.
// This manual copy ensures that all necessary Prisma files are available in the build output.
fs.mkdirSync(folderPath, { recursive: true });
console.log("Folder created successfully.");

const srcPrismaPath = path.join(__dirname, "src", "prisma");
const distPrismaPath = path.join(folderPath, "prisma");

if (fs.existsSync(srcPrismaPath)) {
  fs.cpSync(srcPrismaPath, distPrismaPath, { recursive: true });
  console.log("src/prisma copied to dist/prisma successfully.");
} else {
  console.log("src/prisma does not exist.");
}
