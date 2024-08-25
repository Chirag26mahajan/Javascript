//Call 
function setUsername(username){
    //complex db calls
    this.username = username
}

function createUser(username,email,password){
    // setUsername(username) //ese ye call hoga he ni abhi output sirf email and password ayega
     setUsername.call(this,username)
     this.email = email
     this.password = password
}

const chai = new createUser("chai","chai@gmail.com",123)
console.log(chai);



//Example of call
function greet(greeting, punctuation){
    console.log(greeting + ','+ this.name + punctuation);
}

const person = {name:"Chirag"};
// greet.call(person,'Hello','!')