"use strict"; //treal all js codes to the newer version
//number=> 2 to power 53
// bigint ---> ye use hota hai jese un sites me bitcoins , value bhaut zada ho
// null=> standalone value 
//undefined --> let state; abhi ye hua undefined
//symbol --> uniquness 
//object
//console.log(typeof  );
//typeof null is object whereas that of undefined is undefined only
 
//-------------------------------
let score = "33abc"
let valueInNum = Number(score) //used to convert into number(integer)
// console.log(valueInNum);  //Nan --> not a number 
// console.log(typeof valueInNum); //number 
//if we write let score = null than its output will be 0 and its type will be object
//if we write aboolean value
//let score = true;  output: 1
//false=> 0
//"33" => 33

//let isLoggedIn = " "
// let booleanisLogged = Boolean(isLoggedIn)
// console.log(booleanisLogged) -> false(for empty string)

const id = Symbol("123");
const newId = Symbol("123");
// console.log(id==newId);
const bigNumber = 23949384384439484n;  //n lagaane se automatically ye bigInt ban gaya hai
// console.log(typeof bigNumber);

//References/Non-Primitive
const hero= ["spidy","ironman","doga"]; //Array
let myObj = 
{
    name:"chirag",
    age:22,
}

//variable function
const myfunc = function(){
    console.log("Hello world");
}
// myfunc();


// ---------------------------
//Stack(Primitive),Heap(Non-Primitive)

let userOne = {
    name:"hitesh",
    email:"hitesh@gmail.com"
}

let userTwo = userOne;
userTwo.email ="chirag@gmail.com";
console.log(userTwo.email);
console.log(userOne.email);