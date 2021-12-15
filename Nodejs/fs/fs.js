const fs = require("fs");

let writer = fs.createWriteStream("big.txt");
for (let i = 0; i < 10; i++) {
  writer.write("hello \n");
}
