let ok = true;

const giveMeBurger = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ok) {
        resolve("Chesse Burger");
      } else {
        reject("Go To Subway");
      }
    }, 2000);
  });
};

const promise = giveMeBurger();

// const valuefromthen = promise
//   .then((burger) => {
//     console.log(burger);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const asynoperation=async()=>{
    try{
        let p1=await giveMeBurger()
        console.log(p1)
    }
    catch(err){
        console.log(err)
    }
}
// asynoperation()

( ()=>{
    let message="new"
    console.log(message)
})()