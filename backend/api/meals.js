// backend/api/meals.js
import fs from "fs/promises";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await fs.readFile("./data/available-meals.json", "utf8");
    res.status(200).json(JSON.parse(data));
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
