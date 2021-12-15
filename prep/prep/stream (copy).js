const fs = require("fs");
const zlib = require("zlib");
// let readStream = fs.createReadStream("input.txt");

// readStream.setEncoding("utf-8");

// readStream.on("data", function (chunk) {
//   data += chunk;
// });

// readStream.on("data", function (chunk) {
//   console.log(data);
// });

// readStream.on("err", function (chunk) {
//   console.log(err);
// });

// console.log("program ended");

// let writeStream = fs.createWriteStream("output.txt");
// let data2 = "Hello";

// writeStream.write(data2, "utf-8");

// writeStream.end();

// writeStream.on("finish", function () {
//   console.log("write completed");
// });

// writeStream.on(err,function(err){
//     console.log(err)
// })

// fs.createReadStream("input.txt")
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream("input.txt.gz"));

// console.log("File Compressed.");

fs.createReadStream("input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("input.txt"));
console.log("file decomporessed");
