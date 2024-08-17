const arr = [[1, 2], [3, 4], [5, 6]];
// const flattened=[]

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         flattened.push(arr[i][j])
//     }
// }
// console.log(flattened);


//Method-2

const flattened = arr.reduce((acc,subArray)=>acc.concat(subArray),[]);
console.log(flattened);

