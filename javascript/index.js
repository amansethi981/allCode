// class Animals{
//     constructor(name,age){
//         this.name=name;
//         this.age=age
//     }

// }
// class Cats extends Animals{
//     constructor(name,age,whiskercolor){
//         super(name,age)
//         this.whiskercolor=whiskercolor
//     }
//     whiskers() {
//         retfactorialurn `I have ${this.whiskercolor} whiskers`;
//     }
// }
// let clara = new Cats("Clara", 33, "indigo");
// console.log(clara)
// console.log(clara.whiskers())

// var person={
//     name:"aman",
//     print:function(){
//         console.log('Name is',this.name)
//     }
// }
// var p=person.print
// p.bind(person)
// p()
// apply
// const array=["a","b"]
// const number=[1,2,3,4]
// array.push.apply(array,number)
// console.info(array)
// const result=Math.max.apply(null,number);
// console.log(result)

// call
// function food(name,price){
//     this.name=name;
//     this.price=price
// }
// function product(name,price){
//     //food.call(name,price)
//     this.name=name;
//     this.price=price;
// }
// console.log(new product('cheese', 5));
//arguments.callee
// const arr=[1,2,3,4,5]
// function factorial(n){
//     return (n<1) ?1 :arguments.callee(n-1)*n;
// }
// var result=arr.map(factorial)
// console.log(result)

// function create(n){
//         if(n<=1){
//             return 1;
//         }
//         return n*arguments.callee(n-1);
// }
// var result=create(5)
// console.log(result)
//arguments length

// function adder() {
//     for (var i = 0; i < arguments.length; i++) {
//       var base = Number(arguments[i]);
//       console.log(base)
//     }
//   }
//   console.log(adder())
//arguments [@@iterator]
//   function f() {
//     for (let letter of arguments) {
//       console.log(letter);
//     }
//   }
//   f('w', 'y', 'k', 'o', 'p');

 // without 
//  const arr=['a','b','c'];
//  const itterator=arr.values()
//  for(let letter of itterator){
//      console.log(letter)
//  }

// const myobject={
//     fname:"aman",
//     lname:"singh",
//     fullname:function(){
//         return this;
//     }
// }
// const result=myobject.fullname()
// console.log(result)



 var person={
     name:"abc",
     print:function(){
         console.log(this.name)
     }
 }
 var p= person.print
 p=p.bind(person)
 p()
// console.log(p())


function factorial(n){
    if(n<1){
        return 1
    }
    return n*factorial(n-1)
}
console.log(factorial(4))
console.log(1)

