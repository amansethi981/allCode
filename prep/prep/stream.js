const fs=require("fs")

let readStream=fs.createReadStream("input.txt")
let writeStream=fs.createWriteStream("output.txt");
let data=""
readStream.pipe(writeStream)

readStream.setEncoding("utf-8")
readStream.on("data",(chunk)=>{
  data+=chunk
})

readStream.on("data",(data)=>{
  console.log(data)
})

readStream.on("error",(err)=>{
  console.log(err)
})

function init(){
  let fname="abc"
  function sayfirst(){
    console.log(fname)
  }
  return sayfirst
}
var value=init()
value()

function doadd(x){
  return function(y){
    return x+y
  }
}
console.log(doadd(5)(5))