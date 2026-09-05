import { Buffer } from "node:buffer";

// const buf = Buffer.alloc(4);
// buf.write("Hello vansh");
// console.log(buf);

// console.log(buf.toString());

// const buf = Buffer.from("Hello Vansh");

// console.log(buf);
// buf[0] = 0x47
// console.log(buf);

// console.log(buf.toString());

const buf1 = Buffer.from("Hello ")
const buf2 = Buffer.from("Vansh")

const merge = Buffer.concat([buf1, buf2])

console.log(merge.toString());
