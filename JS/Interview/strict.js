function sum(num1,num2){
    return arguments[0]+arguments[1];
}
sum(10,10) //20


//if i change the values before returing it it will change
function sum(num1,num2){
    num1 = 100;
    num2 = 200;
    return arguments[0]+arguments[1];
}
sum(10,10) //output: 300

//To avoid this we use use strict 
function sum(num1,num2){
    "use-strict"
    num1 = 100;
    num2 = 200;
    return arguments[0]+arguments[1];
}
sum(10,10) //20