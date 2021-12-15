const getData = (num, cb) => {
  setTimeout((num) => {
    console.log("Line 3", num);
    cb(num);
  }, 2000);
};

let x = 0,
  y = 0;

const fn1 = (num) => {
  x = num + 1;
  console.log(x);
  //getData(40, fn2);
};

const fn2 = (num) => {
  y = num + 1;
  console.log(y);
};

getData(30, fn1);
// console.log(undefined + 1);
