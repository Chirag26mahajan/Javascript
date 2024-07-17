//falsy values 
//false,0,-0, BigInt 0n,"", null,undefined,NaN 

//Nullish coalescing Operator (??):null undefined

let val1;
// val1 = 5??10  //5
// val1 = null??10; //10
// val1 = undefined ??15; //15

// console.log(val1);

let myArray  = ["spiderman","batman","superman"];

let arr = 0;
while(arr<myArray.length){
    console.log(`Value is ${myArray[arr]}`);
    arr++;
}