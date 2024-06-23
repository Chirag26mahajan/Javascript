const name  = "Chirag";
const repoCount = 10;

// console.log(`hello everyone my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

// declare string
const nameNew = new String("chirag");
// console.log(nameNew[0]);
// console.log(nameNew.length);

const anotherString = nameNew.slice(1,2);
// console.log(anotherString);

const url = "https://chirag.com/chirag%20mahajan"
// console.log(url.replace('chirag','abhay')); //sirf first occurrence he change karega
// console.log(url.replaceAll('chirag','abhay')); //sari occurrence hategi


const nameTwo = "hello everyone my name is chirag";
console.log(nameTwo.split(" ",4));