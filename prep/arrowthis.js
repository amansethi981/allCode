// var obj = {
//     x: 2,
//     getX: function() {
//         console.log(this.x);
//     }
// }
// const nobj=obj.getX()
// console.log(nobj)
// var x = 5;
// var obj = {
//     x: 2,
//     getX:() => {
//       console.log(this)
//         console.log(this.x)
//     }
// }
// obj.getX(); (2)
// var x = 5;
// var obj = {
//     x: 2,
//     getX: function(){
//         var x = 10;
//         console.log(this)
//         console.log(this.x);
//     }
// }
// var y = obj.getX;;
// y(); (3)

// let x = 5;
// let obj = {
//     x: 2,
//     getX:() => {
//       console.log(this)
//         console.log(this.x)
//     }
// }
// obj.getX();

// let x = 5;
// let obj = {
//   x: 2,
//   getX: function () {
//     let x = 10;
//     console.log(this.x);
//   },
// };
// obj.getX();

// call apply bind
var obj = {
  num: 100,
};

this.num = 200;

var add = function (a, b, c) {
  return this.num + a + b + c;
};

//call
// var result = add.call(obj, 1, 2, 3);
// console.log(result);

// //apply
// const arr = [1, 2, 3];
// var result = add.apply(obj, arr);

// //bind
// var result = add.bind(obj);
// console.log(result(1, 2, 3));

// var obj = {
//   num: 100,
// };

// this.num = 200;

// var add = (a, b, c) =>{
//   return this.num + a + b + c;
// };

//call
// var result = add.call(obj, 1, 2, 3);
// console.log(result);
