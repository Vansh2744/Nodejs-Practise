import express from "express";
import { createClient } from "redis";

const client = createClient({ url: "redis://localhost:6379" });
const app = express();

await client.connect();

client.on("error", (err) => {
  console.log("Redis Error:", err);
});

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 2499,
    description:
      "Over-ear wireless headphones with noise cancellation and 30-hour battery life.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3999,
    description:
      "Fitness smartwatch with heart rate monitoring, sleep tracking, and AMOLED display.",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 1299,
    description: "Ergonomic RGB gaming mouse with adjustable DPI up to 12000.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 3499,
    description:
      "Compact mechanical keyboard with blue switches and customizable RGB lighting.",
  },
  {
    id: 5,
    name: "USB-C Fast Charger",
    price: 899,
    description:
      "33W fast charger compatible with Android phones, tablets, and other USB-C devices.",
  },
  {
    id: 6,
    name: "Laptop Backpack",
    price: 1599,
    description:
      "Water-resistant backpack with a padded 15.6-inch laptop compartment.",
  },
  {
    id: 7,
    name: "Portable SSD 1TB",
    price: 6499,
    description:
      "High-speed external SSD with USB 3.2 support and compact design.",
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 2199,
    description:
      "Portable speaker with deep bass, IPX7 water resistance, and 20-hour playback.",
  },
  {
    id: 9,
    name: "Webcam Full HD",
    price: 1899,
    description:
      "1080p webcam with built-in microphone for online meetings and streaming.",
  },
  {
    id: 10,
    name: "Wireless Power Bank",
    price: 2799,
    description:
      "10000mAh wireless power bank with USB-C fast charging support.",
  },
];

app.get("/", async (req, res) => {
  const result = await client.get("products");

  if (result) {
    res.json({
      type: "redis",
      data: JSON.parse(result),
    });
  }

  await client.set("products", JSON.stringify(products), {
    EX: 10,
  });

  res.json({
    products,
  });
});

app.listen(3000, () => {
  console.log("listening to port:3000");
});
