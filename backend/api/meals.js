import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const filePath = path.join(
        __dirname,
        "..",
        "data",
        "available-meals.json"
      );
      const data = await fs.readFile(filePath, "utf8");
      res.status(200).json(JSON.parse(data));
    } catch (error) {
      console.error("Error reading meals file:", error);
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
