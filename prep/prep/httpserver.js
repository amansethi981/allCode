const http=require("http");

const Server=http.createServer((req,res)=>{
    if(req.url=="/home" && req.method=="GET"){
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end()
    }
    else{
        res.write("Route not found")
    }
})
Server.listen(3000,function(){
    console.log("server started")
})