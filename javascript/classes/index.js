// class product{
    
//     constructor(title,note){
//         this.title=title;
//         this.note=note;
//     }
// }
// const ProductList={
// products:[
//     new product(
//         "A pillow",
//         "Great"
//     ),
//     new product(
//         "A pillow",
//         "Great"
//     ),
    
// ]
// }
// for(var ele in ProductList.products){
//     console.log(ele)
// }
function person(){
    this.age=30;
    this.name="Aman"
    this.greet=function(){
        console.log(this.name+this.age);
    }
}
// person.prototype={
//     printage(){
//         console.log(this.age)
//     }
// }
// person.prototype.printage=function (){
//     console.log(this.age)
// }
// const p=new person()
// p.greet()
// p.printage()

// const user={
//     name:"Abc",
//     greet:function greet(){
//         console.log("hi")
//     }
// }
// user.greet()

// const sumup=(cb,...number)=>{
//     let sum=0;
//     for(const num of number){
//         sum+=num
//     }
//     return cb(sum)
// }

// const showresult=(result)=>{
//     console.log(result)
// }
// (sumup(showresult,12,12,3,4))

// function abc(){
//         var counter=0;
//          counter=counter+1;
         
// }
// // console.log(abc())
// abc()
// // /closure
// function init(){
//     var fname="abc"
//     function sayfirstname(){
//         console.log(fname)
//     }
//     return sayfirstname
// }
// var value=init()
// value()
// function doaddition(x){
//     return function (y){
//         return x+y;
//     }
// }
// var add=doaddition(5);
// console.log(add(5))
// console.log(doaddition(5)(5))

// var a=5;
// function foo(){
//     var a=7;
//     console.log(a)
// }
// foo()
// function outermost(){
//     var x = 'outermost';
//     function intermediate(){
//        var  y = 'intermediate';
//        function innermost(){ // gets
//             var z = 'innermost';
//             console.log(x, y, z);
//        }
//        innermost();
//     }
//     intermediate();
//  }
 
//  outermost();  // prints  
 
 var person={
     name:"abc",
     print:function(){
         console.log(this.name)
     }
 }
 var p= person.print
 p=p.bind(person)
 p()
 function Person() {
    this.age = 23;
  
    setTimeout(() => {
      console.log(this.age); // 23
    }, 1000);
  }
  Person()
  var a;
  console.log(a)
   a=40