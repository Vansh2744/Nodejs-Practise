import { createServer } from "node:http";

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Hello Vansh" }));
  } else if (req.url === "/user") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ name: "Vansh", email: "vansh@gmail.com" }));
  } else if (req.url === "/product") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ name: "Headphones", price: 23000 }));
  } else {
    res.writeHead(400, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "No url found" }));
  }
});

server.listen(3000, () => console.log("listening to port:3000"));
