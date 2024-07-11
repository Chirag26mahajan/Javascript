const name  = "Chirag";
const repoCount = 10;

// console.log(`hello everyone my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

// declare string
const nameNew = new String("chirag");
// console.log(nameNew[0]);
// console.log(nameNew.length);

const anotherString = nameNew.slice(1,2);
console.log(anotherString);

const url = "https://chirag.com/chirag%20mahajan"
// console.log(url.replace('chirag','abhay')); //sirf first occurrence he change karega
// console.log(url.replaceAll('chirag','abhay')); //sari occurrence hategi


const nameTwo = "hello everyone my name is chirag";
console.log(nameTwo.split(" "));
const score = 400
const balance = new Number(100); //important
// console.log(balance); //output is [Number: 100]
// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2)); //100.00  for precision value

const otherNum = 23.899;
// console.log(otherNum.toPrecision(3)); 23.9
const newNum = 123.943;
console.log(newNum.toPrecision(3)); //124

const hundred = 1000000
// console.log(hundred.toLocaleString()); //1,000,000 accoring to US standards --- to coonvert it into indian standards we write 
//("en-IN")
// console.log(hundred.toLocaleString("en-IN"));
console.log(Math.random()); //iski value 0 se 1 ke beech me he ayegi
console.log(Math.random()*10+1);