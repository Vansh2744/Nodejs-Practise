import fs from "fs";

const readStream = fs.createReadStream("input.json", {
  encoding: "utf-8",
  highWaterMark: 20,
});
const writeStream = fs.createWriteStream("output.json");

// readStream.pipe(writeStream);

readStream.on("data", (chunk) => {
  console.log(Buffer.from(chunk));
  writeStream.write(chunk);
});

readStream.on("end", () => {
  console.log("Written in output.json file");
  writeStream.end();
});
