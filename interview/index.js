// function A(name){
//     this.name = name;
//     this.id=35
//     return {
//         name: "A"
//     }
// }
// const a1 =  A ("b");
// console.log(a1.id); 

// console.log(1);
// setTimeout(() => { console.log(4); }, 0);
// process.nextTick(() => { console.log(3); });
// setImmediate(() => { console.log(2); });
// console.log(5);
// process.nextTick(() => { console.log(6); });
// process.nextTick(() => { console.log(7); });

// microtask ,task,priortity 
// 1,5,3,6,7,4,2

// let a ={
//     name:"aman",
//     age:23
// }

// const copiedobj=(obj)=>{
//     let b={...obj}
//     return b
// }
function person(name,age){
    this.name=name;
    this.age=age;
}
function developer(name,age,comptency){
    person.call(name,age)
    this.comptency=comptency;
}
function seniordevloper(name,age,comptency,experience){
    developer.call(name,age,comptency)
    this.experience=experience
}
throw new Error("some")

app.post("/addmarks",(req,res)=>{
    if(req.body.marks>100){
        throw new Error("Marks excced")
    }
    else{
        let marks=req.body.marks
        let user=user.insertMany([])
    }
    Promise.resolve(req.body.marks).then((data)=>console.log(data)).catch((err)=>console.log(err))
})


const obj=new seniordevloper("aman",23,"MEAN","03")
console.log(obj)