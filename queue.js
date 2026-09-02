import IORedis from "ioredis";
import { Queue } from "bullmq";
import express from "express";

const app = express();

app.use(express.json());

export const connection = new IORedis({
  host: "127.0.0.1",
  port: 6379,
  maxRetriesPerRequest: null,
});

const emailQueue = new Queue("emailQueue", {
  connection,
});

app.post("/register", async (req, res) => {
  const { email, name } = req.body;

  await emailQueue.add("sendWelcomeEmail", {
    email,
    name,
  });

  res.json({
    message: "User registered successfully.",
    status: "Email queued",
  });
});

app.listen(3000, () => {
  console.log("listening to port : 3000");
});
