import express from "express";
import rateLimit from "express-rate-limit";

const app = express();

const rateLimiter = rateLimit({
  windowMs: 10000,
  limit: 5,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

app.use(rateLimiter);

app.get("/", (req, res) => {
  res.json({ message: "Everything is working good" });
});

app.listen(3000, () => {
  console.log("listening to port:3000");
});
