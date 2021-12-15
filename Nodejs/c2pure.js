let y = 2,
  z = 3;
console.log(y + " " + +z);

const foo = (x, y, z) => {
  y = y * x;
  z = y * x;
  return x + y;
};
console.log("Result of function" + foo(5));
console.log("side Effect" + y + " " + z);
console.log("Result of function" + foo(5,y,z));
console.log("side Effect" + y + " " + z);
