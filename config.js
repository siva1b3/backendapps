import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folderPath = path.join(__dirname, "dist");

if (fs.existsSync(folderPath)) {
  fs.rmSync(folderPath, { recursive: true, force: true });
  console.log("Folder deleted successfully.");
} else {
  console.log("Folder does not exist.");
}

// copy js and .d.ts files
// from the src folder to the dist folder
// as compiler not emit them we copy them manually
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
