let ok = false;
let randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;

const giveMeBurger = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ok) {
        resolve("Chesse Burger");
      } else {
        reject("No Burger are avilable with us");
      }
    }, 2000);
  });
};

// const helper = async () => {
//   try {
//     var p1 = await giveMeBurger();
//     console.log(p1);
//   } catch (err) {
//     console.log(err);
//   }
// };
// helper();
var promises = giveMeBurger();
console.log("Line 17");
console.log(promises);

const valurfromthen = promises
  .then((burger) => {
    console.log("Line 20");
    console.log(burger);
    console.log("share wtih friends");
    return "something";
  })
  .catch((err) => {
    console.log("Line 26");
    console.log(promises);
    console.log(err);
    console.log("Lets go to subway");
  });
console.log("Line 32");
console.log(valurfromthen);
