class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){  //getter name is same as the property 
        return `${this._email}`
    }

    get password(){
        return this._password.toUpperCase();
    }

    set email(value){
        this._email = value
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const chirag = new User("chirag@gmail.com","abc")
    console.log(chirag.password);
    console.log(chirag.email);

    //We use _email and _password   to avoid recursion 
    //to avoid naming conflicts b/w class prop and getter setter methods