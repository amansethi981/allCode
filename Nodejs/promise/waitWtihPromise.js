const WaitFor2Seconds = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("return after 2 seconds");
    }, 2000);
  });
};

const waitFor3Seconds = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Return after 3 seconds");
    }, 3000);
  });
};

const waitFor4Seconds = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Return after 4 seconds");
    }, 4000);
  });
};

const helper = async () => {
  try {
    console.log("Before");
    let promise2 = WaitFor2Seconds();
    let promise4 = waitFor4Seconds();
    let promise3 = waitFor3Seconds();

    let ans = await promise2;
    console.log(ans);
    console.log("After");

    let ans2 = await promise3;
    console.log(ans2);

    let ans3 = await promise4;
    console.log(ans3);

    console.log("After Promise");
  } catch (err) {
    console.log(err);
  }
};

function syncfun() {
  console.log("Sync function");
}
syncfun();
helper();

for (var i = 0; i < 10; i++) {
  console.log(i);
}
