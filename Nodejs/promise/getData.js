const getData = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

const helper = async () => {
  const p1 = getData(10);
  const p2 = getData(20);

  const num1 = await p1;
  const num2 = await p2;
  let x = num1 + 1;
  console.log(x);
  let y = num2 + 1;
  console.log(y);

  const p3 = getData(x + y);
  const num3 = await p3;

  console.log(num3);
};

helper();
