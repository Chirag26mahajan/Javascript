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

console.log(user.subtract(8,1));

