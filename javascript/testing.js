// const user={
//     name:"aman",
//     age:"23"
// }
// let val=10;
// array.forEach(element => {
//     val+=ele
// });
// const narr=arr.map((ele)=>{
//     console.log(ele)
// })
// console.log(narr)
// user.name
// user.age
// const [name,age]=user
// const arr=[1,2,3,4]
// arr[0]=5;
// console.log(arr)
// const Card=(props)=>{

//     return(
//         <div className="card">
//             {props.children}
//         </div>
//     )
// }
// import Card from"./""
// const Ncard=()=>{
//     return(
//     <Card props="A new Component" />
//     <h1>This </h1>
//     )
// }

// const arr = [1, 2, 3, 4, 5];
// arr[0] = 10;
// arr.map((ele) => {
//   console.log(ele);
// });
// const sumval=arr.reduce((prev,curr)=>{
//     let ans=prev+curr;
//     return ans;
// })
// console.log(sumval)

var i=10;
for(var i=0;i<10;i++){
  console.log(i)
}

var person={
  name:"abc",
  print:function(){
      console.log(this.name)
  }
}
let p=person.print
p=p.bind(person)
p()

let fruits=["apple","Banana"];
// fruits.forEach((item,index)=>{
//   console.log(item,index)
// })

console.log(fruits.unshift("strawberry"))
console.log(fruits)
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
let pos=1;
let n=2;
let removed_item=vegetables.splice(pos,n);
console.log("Vegitable array",vegetables)
console.log("Removed Array",removed_item)

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
let shallowcopy=animals.slice(4)
console.log(shallowcopy)