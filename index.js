import fs from "node:fs";

const content = fs.readFileSync("test.txt", "utf-8");
console.log(content);

fs.writeFileSync("copy.txt", content, "utf-8");
