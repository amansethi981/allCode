const arr = [1, 2, 3, 4, 5];

const multiply = (n1, n2) => {
  return n1 * n2;
};

const composer = (arr, fn) => {
  let total = arr[0];
  for (let i = 0; i < arr.length; i++) {
    total = fn(total, arr[i]);
  }
  return total;
};

// const multiply=arr.reduce((prev, curr) => {
//   let total = prev * curr;
//   return total;
// });
// console.log(multiply)

let product = composer(arr, multiply);
console.log(product);
