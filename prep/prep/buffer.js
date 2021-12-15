let buffer1 = new Buffer("abc");
let buffer2 = new Buffer("abcd");
var result = buffer1.compare(buffer2);
console.log(result)

let buffer3 = Buffer.concat([buffer1, buffer2]);
console.log(buffer3.toString())
