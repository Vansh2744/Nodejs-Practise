import { Worker } from "bullmq";
import { connection } from "./queue.js";

const emailWorker = new Worker(
  "emailQueue",
  async (job) => {
    console.log("Sending email to:", job.data.email);

    await new Promise((resolve) => setTimeout(resolve, 10000));

    console.log("Email Sent!");
  },
  { connection },
);
