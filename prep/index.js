// // fs.readFile('Demo.txt', 'utf8', function(err, data){
// //     // Display the file content
// //     console.log(data);
// // });

// // const { rejects } = require("assert");
// // const fs=require("fs")
// // let readFile=fs.readFile("Demo.txt","utf8",(()=>))

// const promise=(data)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(readFile)
//         },2000)
//         reject("Error")
//     })
// }
//  const value=async()=>{
//      try{
//         const p1=await readFile
//      }
//      catch(err){
//          console.log(err)
//      }
//  }

// var myObject = {
//   foo: "bar",
//   func: function () {
//     setTimeout(() => {
//       console.log(this.foo);
//     }, 200);
//   },
// };
// myObject.func();

// setTimeout(function timeout() {
//   console.log("Timed out!");
// }, 0);
// Promise.resolve(1).then(function resolve() {
//   console.log("Resolved!");
// });

// const pureComp=()=>{
//     useEffect(()=>{
        
//     },[])
// }

// app.post("/",(req,res,next)=>{
//     next()
// },((req,res,next)=>{
//     console.log("hello")
// }))

// post
// delete
// patch
// Put
// get 



// db.order.aggregrate([
//     {$match:{status:'online'}},
//     {$project:{_id:0,name:1,age:1}},
//     {$sort:{name:1}}
// ]
// db.order.find({}).sort().skip(10).limit(5)
// limit:15,skip
// db.order.find({}).limit(5).skip(10).sort()
const fs=require("fs")
// fs.readFile("input.txt","utf-8",((err,data)=>{
//   if(err){
//     return err
//   }
//   console.log(data)
// }))
console.log("hi")
 const func=()=>{
   return new Promise((resolve,reject)=>{
    fs.readFile("input.txt","utf-8",((err,data)=>{
      if(err){
        return err
      }
      resolve(data)
    }))
   })
 }
 const valuefromthen=async()=>{
 try{

  let p1=await func()
  console.log(p1)
 }
 catch(err){
   console.log(err)
 }
 }
 valuefromthen()