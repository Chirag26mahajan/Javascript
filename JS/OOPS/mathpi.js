const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

// console.log(Math.PI);

const chai = {
    name:"Chai",
    price:250,
    isAvailable:true
}
// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));


