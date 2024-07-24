//accumulator

const myNums = [1,2,3];
// const total = myNums.reduce(function(acc,currVal){
//     console.log(`${acc} and ${currVal}`);
//     return acc+currVal
// },0)

// const total = myNums.reduce((acc,currVal)=>acc+currVal,0)  can we done without {} but if we use them we need to write return statment as well
const total = myNums.reduce((acc,currVal)=>{ return acc+currVal},1)
// console.log(total);

const shoppingCart= [
    {
        itemName:"Js course",
        price:2999
    },
    {
        itemName:"Java course",
        price:4999
    },
    {
        itemName:"Web Development",
        price:8999
    }
]

const bill  =shoppingCart.reduce((acc,currVal)=>{
    return acc+currVal.price
},0)

console.log(bill);