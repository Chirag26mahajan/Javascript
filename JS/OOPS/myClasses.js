//ES6
//Modern syntax
class User{
   constructor(username,email,password){   //name has to be constructor only
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User("chirag","chriag@gmail.com","123")
console.log(chai.encryptPassword());
console.log(chai.changeUserName());


// //Behind the scene
// function Users(username,email,password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// Users.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// const chai1 = new User("chirag","chriag@gmail.com","123")
// console.log(chai1.encryptPassword());