class User{
    constructor(username){
        this.username = username;
    }

    //Method
    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){  //ye sirf user ke andar he call and use hoga
        return `123`
    }
}

const chirag = new User("chirag");
// console.log(chirag.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone","Iphone@gmail.com")
iphone.logMe()