import { EventEmitter } from "node:events";

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

// eventEmitter.on("msg", (msg) => {
//   console.log(`Message : ${msg}`);
// });

// eventEmitter.on("msg", (msg) => {
//   console.log(`Received : ${msg}`);
// });

// eventEmitter.emit("msg", "Hello Vansh");

// class Chat extends EventEmitter {
//   sendMessage(msg) {
//     console.log("Message Send : ", msg);
//     this.emit("msg", msg);
//   }

//   sendNotification(msg) {
//     this.emit("notify", msg);
//   }
// }

// const chat = new Chat();

// chat.on("msg", (msg) => {
//   console.log(`Message Received : ${msg}`);
// });

// chat.on("notify", (msg) => {
//   console.log(`Notified that ${msg}`);
// });

// chat.sendMessage("Hello Vansh");
// chat.sendNotification("You are logged in successfully");

// const errDisplay = (err) => {
//   console.log(`Error : ${err.message}`);
// };

// eventEmitter.on("error", errDisplay);

// eventEmitter.emit("error", new Error("Unable to Fetch User"));
// eventEmitter.removeListener("error", errDisplay);
