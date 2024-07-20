const nums = [1,2,3,4,5,6,7,8,9]

const newNums = nums
              .map((num)=>num*10)
              .map((num)=>num+1)
              .filter((num)=>num>=40)
console.log(newNums);

// const newNums = nums.filter((num)=>num>4)
// console.log(newNums);


// const newNums = nums.filter((num)=>{
//     return num>4   //yaha return likhna he padega
// })

// const newNum = []
// nums.forEach((num)=>{
//     if(num>4){
//         newNum.push(num)
//     }
// })
// console.log(newNum);


// const newNumers = nums.map((nums)=>{
//     return nums+10;
// })

// console.log(newNumers);