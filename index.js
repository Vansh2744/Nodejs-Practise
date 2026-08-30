import fs from "node:fs";
import os from "node:os";

// const content = fs.readFileSync("test.txt", "utf-8");
// console.log(content);

// fs.writeFileSync("copy.txt", content, "utf-8");

// fs.appendFileSync("copy.txt", `\n${content}`, "utf-8");

// fs.mkdirSync("app");

// fs.mkdirSync("src/utils", { recursive: true });

// fs.rmdirSync("app");
// fs.rmSync("src", { recursive: true, force: true });

// console.log(os.cpus());
// console.log("Total Memory", os.totalmem() / (1024 * 1024 * 1024)); //GB
// console.log("Free Memory", os.freemem() / (1024 * 1024)); //MB
// console.log(os.uptime() / (60 * 60)); //Hours
// console.log(os.hostname());
// console.log(os.userInfo());

// console.log(os.cpus()[1]);

// console.log("Hello Vansh");

// console.log(os.cpus()[1]);

// fs.readFile("test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Something went wrong");
//     return;
//   } else {
//     console.log(data);
//   }
// });

fs.writeFile("copy.txt", "Hello Folks", "utf-8", (err) => {
  if (err) {
    console.log("Something went wrong");
    return;
  } else {
    console.log("Written in File");
  }
});
