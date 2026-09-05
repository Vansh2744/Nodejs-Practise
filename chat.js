import { EventEmitter } from "node:events";

class Chat extends EventEmitter {
  constructor() {
    super();
    this.users = new Set();
  }

  join(user) {
    this.users.add(user);
    this.emit("join", user);
  }

  sendMessage(user, msg) {
    if (this.users.has(user)) {
      this.emit("msg", user, msg);
    } else {
      console.log("You can't send message, first join the room");
    }
  }

  leave(user) {
    if (this.users.has(user)) {
      this.users.delete(user);
      this.emit("leave", user);
    } else {
      console.log("first join the room");
    }
  }
}

const chat = new Chat();

chat.on("msg", (user, msg) => {
  console.log(`${user}: ${msg}`);
});

chat.on("join", (user) => {
  console.log(`${user} join the chat`);
});

chat.on("leave", (user) => {
  console.log(`${user} leave the chat`);
});

chat.join("Vansh");
chat.join("Aman");

chat.sendMessage("Vansh", "Hello");
chat.sendMessage("Aman", "Hi");

chat.leave("Vansh");

chat.sendMessage("Vansh", "Hello");
