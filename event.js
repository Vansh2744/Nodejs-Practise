import EventEmmiter from "node:events";

const eventEmiiiter = new EventEmmiter();

eventEmiiiter.on("msg", (msg) => {
  console.log(`Message: ${msg}`);
});

eventEmiiiter.emit("msg", "Hello Vansh");
