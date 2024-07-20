const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

const greeting = "hello there how are u"

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

//Maps
const map  = new Map();
map.set("IN","India")
map.set("US","United States")
console.log(map.get("IN"));
// console.log(map);
// for (const key of map) {   
//     console.log(key);
// }

// output will be 
// [ 'IN', 'India' ]
// [ 'US', 'United States' ]

// for (const [key,value] of map) {
//     console.log(key,value);
// }