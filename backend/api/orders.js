import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Or specify your domain for more security
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "POST") {
    const orderData = req.body?.order;

    if (!orderData || !orderData.items || orderData.items.length === 0) {
      return res.status(400).json({ message: "Missing data." });
    }

    const { customer } = orderData;

    if (
      !customer.email?.includes("@") ||
      !customer.name?.trim() ||
      !customer.street?.trim() ||
      !customer["postal-code"]?.trim() ||
      !customer.city?.trim()
    ) {
      return res.status(400).json({ message: "Missing customer info." });
    }

    try {
      const filePath = path.join(__dirname, "..", "data", "orders.json");

      // Read existing orders
      const fileExists = await fs
        .access(filePath)
        .then(() => true)
        .catch(() => false);

      let orders = [];

      if (fileExists) {
        const data = await fs.readFile(filePath, "utf-8");
        orders = JSON.parse(data || "[]");
      }

      const newOrder = { ...orderData, id: Math.random().toString() };
      orders.push(newOrder);

      // Write updated orders
      await fs.writeFile(filePath, JSON.stringify(orders, null, 2));

      return res.status(201).json({ message: "Order created!" });
    } catch (error) {
      console.error("Error saving order:", error);
      return res.status(500).json({ message: "Failed to save order." });
    }
  }

  res.status(405).json({ message: "Method not allowed" });
}
