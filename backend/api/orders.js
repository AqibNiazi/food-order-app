import fs from "node:fs/promises";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const orderData = req.body.order;

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

    const newOrder = { ...orderData, id: Math.random().toString() };
    const filePath = path.join(process.cwd(), "data", "orders.json");
    const orders = JSON.parse(await fs.readFile(filePath, "utf-8"));
    orders.push(newOrder);
    await fs.writeFile(filePath, JSON.stringify(orders, null, 2));

    return res.status(201).json({ message: "Order created!" });
  }

  res.status(405).json({ message: "Method not allowed" });
}
