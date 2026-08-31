import fs from "fs";

const readStream = fs.createReadStream("input.json");
const writeStream = fs.createWriteStream("output.json");

readStream.pipe(writeStream);
