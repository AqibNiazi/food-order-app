import fs from "node:fs/promises";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const filePath = path.join(process.cwd(), "data", "available-meals.json");
    const data = await fs.readFile(filePath, "utf-8");
    return res.status(200).json(JSON.parse(data));
  }
  res.status(405).json({ message: "Method not allowed" });
}
