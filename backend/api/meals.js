import fs from "node:fs/promises";
import path from "path";

export default async function handler(req, res) {
  // ✅ Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*"); // or specify domain for more security
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ✅ Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // ✅ Handle GET request
  if (req.method === "GET") {
    try {
      const filePath = path.join(process.cwd(), "data", "available-meals.json");
      const meals = await fs.readFile(filePath, "utf-8");
      res.status(200).json(JSON.parse(meals));
    } catch (error) {
      res.status(500).json({ message: "Failed to load meals." });
    }
  } else {
    // ✅ Method not allowed
    res.status(405).json({ message: "Method not allowed" });
  }
}
