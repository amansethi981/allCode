// const arr=[1,2,3,4,5]

// function abc(){
//     for(let i=0;i<arr.length;i++){
//         setTimeout(function(){
//         console.log("Dispaly Array is:",arr[i])
//         },i*300)
//     }
// }
// abc()
// console.log("-------foreach--------")
// let fruits=["apple","Banana"]
// fruits.forEach(function(item,index){
//     console.log(item,index)
// })
// fruits.forEach(ele=>console.log(ele))
// console.log("---------shift---------")
// fruits.shift()
// console.log("------unshift-------")
// fruits.unshift("Strawberry")
// fruits.forEach(ele=>console.log(ele))
// console.log("-------------Remove an item by index position------------")
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
let pos=1;
let n=2;
let removed_item=vegetables.splice(pos,n);
console.log("Vegitable array",vegetables)
console.log("Removed Array",removed_item)
console.log("------slice---------")
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
let shallowcopy=animals.slice()
console.log(shallowcopy)

// function food(name,price){
//     this.name=name;
//     this.price=price
// }
// function product(name,price){
//     food.call(name,price)
//     this.name=name;
//     this.price=price;
// }
// console.log(new product('cheese', 5));
function person(name,age){
this.name=name;
this.age=age;
}
function employee(name,age){
    person.call(name,age)
    this.name=name;
    this.age=age;
}
function developers(name,age){
    employee.call(name,age)
    this.name=name;
    this.age=age
}
console.log(new employee('Aman',23))

// let person={
//     name:'aman',
//     greet:function() {
//         return ("Hi I'm",this.name)
//     }
// }
// let employee={
//     name:'abc',
//     greet:function() {
//         return ("Hi I'm",this.name)
//     }

// }
// employee._proto_=person
// console.log(employee.name)