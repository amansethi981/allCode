// const person={
//     name:"Aman",
//     age:23,
//     greet:function(){
        
//     }
// }
// //modife in object
// person.age=31;
// //delete in object 
// delete person.age;
// //add
// person.isAdmin=true
// console.log(person)
// person.greet()
// //square bracket
// const user={
//     "first-name":"aman"
// }
// console.log(user["first-name"])

var person={
    name:"abc",
    print:function(){
        console.log(this.name)
    }
}
var p= person.print
console.log(p)
p=p.bind(person)
p()
console.log(p)