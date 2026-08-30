import { createServer } from "node:http";

const server = createServer((req, res) => {

  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({ name: "Vansh", email: "vansh@gmail.com" }));
});

server.listen(3000, () => console.log("listening to port:3000"));
