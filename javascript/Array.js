const months = ['Jan', 'March', 'April', 'June'];
const nmotnths=months.slice(3)
console.log(months.slice(2))


//reduce
const arr3=[1,2,3,4,5,6]
let sum=arr3.reduce((prev,curr)=>{
    return prev+curr
},0)
console.log(sum)

// const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
//     (accumulator, currentValue) => accumulator.concat(currentValue)
//   );
  
//   arr3.forEach((ele)=>{
//       console.log(ele)
//   })
//   console.log(arr3)
//   const maparr=arr3.map((ele)=>{
//     return ele*2
//   })
  
//   console.log(maparr)