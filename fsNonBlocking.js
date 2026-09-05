import fs from "fs";

fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    throw new Error(err.message);
  } else {
    console.log(data);
  }
});

console.log("Ending File Read");
