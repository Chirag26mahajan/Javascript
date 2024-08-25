// let myName = "chirag     "
// // console.log(myName.trim().length);
//  console.log(myName.trueLenght)


let myHeros = ["thor","spiderman"]
let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.chirag = function(){
    console.log(`Chirag is present everywhere`);
}

Array.prototype.heyChirag = function(){
    console.log(`Chirag says hello`);
    
}

String.prototype.newWord = function(){
    console.log(`New String `);
}
    
// }
//It won't for strings like this because Strings in js are primitive values 
//not objectsHowever, when you call a method on a string, 
// JavaScript automatically wraps the string in a temporary
//  String object, allowing you to use properties 
// and methods defined on String.prototype


//Be it function, array or strings everything goes through object and there is no super protoype of object 
// heroPower.chirag() // it will work

//when i use array for it 
// myHeros.chirag();
// myHeros.heyChirag()
// myHeros.newWord()


// function curryfn(a){
//     return function(b){
//         const mult = a*b; //6
//         return function(c){
//             return res = mult*c;
//         }
//     }
// }


//inheritance

const user = {
    name:"Chai",
    email:"chirag@goole.com"
}

const teacher = {
    makeVideo :true
}

const teachingSupport ={
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__: teachingSupport  //keyword used to inherit
    // It is a way to access or set the prototype of an object,
    //  which is the object that it inherits methods and properties from
}

teacher.__proto__ = user
console.log(teacher.name);



//Modern Syntax

Object.setPrototypeOf(teachingSupport,teacher);

let anotherUser = "ChaiAurCode   ";
String.prototype.trueLength = function(){   //trueLength is a method i created over here
    console.log(`${this}`); //chaiAurCode
    console.log(`True length is :${this.trim().length}`);
}

anotherUser.trueLength();
// "chirag".trueLength();
