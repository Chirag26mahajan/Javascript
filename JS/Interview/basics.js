// console.log(1<2<3) //true
// console.log(3>2>1) //fale

// in first the output is true because 
// 1<2 is true
// true<3  // true is 1 and fasle is 0
// so 1<3 which is true but not vice versa 
//3>2 true 1>1 false 

// console.log(Nan==Nan) //false
// console.log(isNaN(NaN)); // true
// console.log(Number.isNaN(NaN)); // true


let arr = [0,1,2,3,4,5,6]
let res = arr.filter((e)=>e<3).map((e)=>e*2).reduce((acc,currVal)=>acc+currVal,)

// arr.filter((e)=>e<3).map((e)=>e*2).reduce((acc,currVal)=>acc+currVal,)
//Now this has changed to a number so we cannot use array method on this

// console.log(res);


// function foo(a, ...rest,b){ //error will be rest parameter must be last formal parameter
//     console.log(a,rest,b);
    

// }

// foo(1,2,3,4,5)

function foo(a,b,...rest){
    console.log(a,b,rest);   //rest operator put this in an array
}
// foo(1,2,3,4,5)  //output: 1 2 [ 3, 4, 5 ]



//Ques: 
var x =20
function foo(){
    console.log(x);
    var x = 10;
}

// foo() //output will be undefined 

//due to hoisting it looks like this to js
// function foo() {
//     var x; // x is hoisted and initialized with undefined
//     console.log(x); // This logs `undefined`
//     x = 10;
// }
// Even though there is a global x with the value 20, 
// the local var x inside the foo function shadows it


//Ques
// console.log(name)  //name is keyword and global variabe in browser scope 
// var name = "John" //in global scope it is always present as empty string

console.log(name)
 var name = "John"



// console.log(names)
// let names = "John" //but this here will show error undefined



//Ques
// setTimeout(()=>{
//     console.log("timeout");
    
// },0)
// Promise.resolve().then(()=>console.log("promise"));
// console.log("End");
//Promise has more priortiy over setTimeout , Both goes to the queue but there are two types of queue
//Promise goes to microTask Qeue whereas setTimeout goes to callback queue


//Ques
async function foo(){
    return "Hello World"
}

const result = foo()    
// console.log(result)

//Khali async likhunga to it will return me promise 
//output :  Promise { 'Hello World' } 
//<scrpit type="module" src=""></scrpit>

//1 To solve this we can write it in another async func
async function foo(){
    return "Hello World"
}

async function main(){

    const result = await foo()    
    console.log(result)
}

// main()


//2 using .then()

// async function foo(){
//     return "Hello World"
// }
// foo().then(result=>{
//     console.log(result);
// })




//Ques methods vs fucnction

const user = {
    add:function (a,b){
        return a+b;
    },

    subtract : function(a,b){
        return a-b;
    },

    multiply: function(a,b){
        return a*b;
    },

    divide(a,b){ //better method
        return a/b
    }
}

// console.log(user.subtract(8,1));



const number = [1,2,3]
number[10] =11
// console.log(number); 
//since js is user friendly it handles the error itself and return 
// [ 1, 2, 3, <7 empty items>, 11 ]



//Ques if i dont pass anything in check it should give me an error 
function check(){
   throw new Error("Param Required");   
}

function show(name =check()){
    console.log(name);
}

// show("chirag"); //no error
// show(); //will throw an error


var name = 2024;
// console.log(name+1);  //name is reserved keyword and when we are working in global scope it converts it into string
//output - 20241


for(var i=0;i<3;i++){
    setTimeout(()=>{
        // console.log(i);
    })
}
//output will be 3 3 3 because we are using var a function scope
//so it creates a single i for every iteration i.e 3 but i we use let  output will be 1 2 3 


//Ques

console.log(null==undefined);   //since both are falsy values
console.log(null===undefined);  //checks datatypes as well null is object
console.log(30+undefined);  //undefined converted into NaN
console.log(30+null); //here null is converted to 0 
console.log(null+undefined);

//true
// false
// NaN
// 30
// NaN


//Ques Negative Infinity 
let result1 = -1 / 0;
console.log(result1); // Output: -Infinity


const arr1 = [1,9,3,4,5,6]
console.log(arr1.at(2));
 //starts with 0 index


//Ques Spotify 
function fetch(){
    A  = 7;
    console.log(A);
}
let A;
fetch(); //output will be 7


console.log(false==[]); //true  false==""   0==0
console.log(false ==![]); //true


//Ques 
function containsOnlyNumbers(str) {
    const regex = /^\d+$/;
    return regex.test(str);
}

//const regex = /^[A-Za-z]+$/;
// const regex = /^[^\w\s]+$/;
// \w matches any alphanumeric character (letters and digits) and underscores.
// \s matches any whitespace character (spaces, tabs, line breaks).

// console.log(containsOnlyNumbers("123456")); // true
// console.log(containsOnlyNumbers("123abc")); // false
// console.log(containsOnlyNumbers("1234.56")); // false
// console.log(containsOnlyNumbers("")); 


//Ques Duplicates
const arrNum = [1,2,8,2,9,8];
const duplicate = arrNum.filter((ele,index,arr)=>arr.indexOf(ele)!==index);
console.log(duplicate);