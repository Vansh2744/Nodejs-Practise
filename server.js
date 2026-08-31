import { createServer } from "node:http";
import fs from "node:fs";

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    const data = fs.createReadStream("./index.html");
    // data.on("data", (chunk) => {
    //   res.write(chunk);
    // });
    // data.on("end", () => {
    //   res.end();
    // });
    data.pipe(res);
  } else if (req.url === "/user") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ name: "Vansh", email: "vansh@gmail.com" }));
  } else if (req.url === "/product") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ name: "Headphones", price: 23000 }));
  } else if (req.method == "POST" && req.url === "/create") {
    let buff = "";
    req.on("data", (chunk) => {
      buff = buff + chunk.toString();
    });
    req.on("end", () => {
      console.log(JSON.parse(buff).email);
      res.writeHead(200, { "content-type": "application/json" });
      res.end(buff);
    });
  } else {
    res.writeHead(400, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "No url found" }));
  }
});

server.listen(3000, () => console.log("listening to port:3000"));
