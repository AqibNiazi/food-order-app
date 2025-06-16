import fs from "node:fs/promises";
import path from "path";

export default async function handler(req, res) {
  // ✅ CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*"); // You can restrict this to your frontend domain for production
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ✅ Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // ✅ Handle POST request
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
      const filePath = path.join(process.cwd(), "data", "orders.json");

      // Check if file exists
      let orders = [];
      try {
        const data = await fs.readFile(filePath, "utf-8");
        orders = JSON.parse(data || "[]");
      } catch {
        // file doesn't exist or empty — start with empty array
        orders = [];
      }

      const newOrder = { ...orderData, id: Math.random().toString() };
      orders.push(newOrder);

      await fs.writeFile(filePath, JSON.stringify(orders, null, 2));

      return res.status(201).json({ message: "Order created!" });
    } catch (error) {
      console.error("Error saving order:", error);
      return res.status(500).json({ message: "Failed to save order." });
    }
  }

  // ✅ Method not allowed
  res.status(405).json({ message: "Method not allowed" });
}
