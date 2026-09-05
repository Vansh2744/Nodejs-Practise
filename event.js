import EventEmitter from "node:events";

const eventEmitter = new EventEmitter();

// eventEmitter.on("msg", (user) => {
//   console.log(user);
// });

// eventEmitter.emit("msg", { name: "Vansh", email: "vansh@gmail,com" });

// eventEmitter.once("msg", (msg) => {
//   console.log(msg);
// });

// eventEmitter.emit("msg", "Hello Vansh");
// eventEmitter.emit("msg", "Hello Aman");
// eventEmitter.emit("msg", "Hello Kartik");

eventEmitter.on("msg", (msg) => {
  console.log(`Message : ${msg}`);
});

eventEmitter.on("msg", (msg) => {
  console.log(`Received : ${msg}`);
});

eventEmitter.emit("msg", "Hello Vansh");
