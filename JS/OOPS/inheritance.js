class user{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends user{   //Teacher is child and user is parent class 
     constructor(username,email,password){
        super(username)  //to inherit from  constructor of parent class
        this.email = email;
        this.password = password;
     }

     addCourses(){
        console.log(`A new course was created by ${this.username}`)
     }
}

const chirag = new Teacher("chir","chirag@gmail.com","123")
chirag.addCourses()
const masalaChai  = new user("masalaChai");
// masalaChai.addCourses()
console.log(chirag instanceof Teacher);  //true
