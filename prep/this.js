// const test = {
//   prop: 42,
//   func: function () {
//     console.log(this);
//     console.log(this.prop); //42
//   },
//   func1: () => {
//     console.log(this); //{}
//     console.log(this.prop); //undefined
//   },
// };
// const obj = test.func;
// obj(); //undefined
// //test.func1();
global.a = "12";
var myObject = {
  foo: "bar",
  func: () => {
    // self=this
    // setTimeout(() =>{
    //   console.log(this.foo);
    // }, 200);
  },
};
myObject.func();

// function add(c, d) {
//   return this.a + this.b + c + d;
// }
// var o = { a: 1, b: 2 };
// var res = add.call(o, 5, 6);
// console.log(res);

// // bind method

// function g() {
//   return this.a;
// }

// var f = g.bind({ a: "aaaf" });
// console.log(f()); //aaaf

// var j = f.bind({ a: "rty" }); //bind only works
// console.log(j()); //aaaf

// var gloabalObject = this;
// console.log(gloabalObject); //{}

// var foo = () => {
//   console.log(this); // {}
//   return this;
// };
// console.log(foo() === gloabalObject);

// let num = 0;
// console.log(num++); //0
// console.log(++num); //2
// console.log(num); //2

// let a = 3;
// let b = new Number(3);
// let c = 3;
// console.log(typeof(b))
// console.log(a == b);
// console.log(a === b);
// console.log(b === c);
// console.log(a === c);

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
// console.log(i)
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
let x = 5;
let obj = {
  x: 2,
  getX: function () {
    let x = 10;
    console.log(this.x);
  },
};
let y = new obj.getX();
var foo = 20;
var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func: this.foo = " + this.foo);
    console.log("outer func: self.foo = " + self.foo);
    (function () {
      console.log("inner func: this.foo = " + this.foo);
      console.log("inner func: self.foo = " + self.foo);
    })();
  },
};
myObject.func();

(function () {
  var a = (b = 3);
})();
console.log("a defined? " + (typeof a !== "undefined"));
console.log("b defined? " + (typeof b !== "undefined"));

function foo1() {
  return { bar: "hello" };
}

(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
})();

var a = {},
  b = { key: "b" },
  c = { key: "c" };
a[b] = 123;
a[c] = 456;
console.log(a[b]);

var length = 10;
function fn() {
  console.log(this.length);
}
var obj = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0]();
  },
};
obj.method(fn, 1);
