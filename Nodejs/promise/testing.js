var a = 5;
function test() {
console.log("hi")
  a = 10;
  return;
  function a () {
      console.log("Hiii");
  }
}
console.log(a); //5
test();
console.log(a); //5,10,undefined,function
