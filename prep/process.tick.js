const func = () => {
  setTimeout(() => {
    console.log("timeout");
  }, 0);

  setImmediate(() => {
    console.log("Immediate");
  }, 0);

  setTimeout(() => {
    console.log("timeout2");
  }, 0);

  process.nextTick(() => console.log("nextTick"));

  Promise.resolve(1).then(function resolve() {
    console.log("Resolved!");
  });

  setImmediate(() => {
    console.log("Immediate2");
  }, 0);

  setTimeout(() => {
    console.log("timeout3");
  }, 0);

  console.log("outside");
};

func();

//process.tick > promise > setTimeout >set Immediate
