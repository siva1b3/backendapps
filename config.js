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
