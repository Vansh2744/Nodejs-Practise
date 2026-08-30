import fs from "node:fs";

const content = fs.readFileSync("test.txt", "utf-8");
console.log(content);
