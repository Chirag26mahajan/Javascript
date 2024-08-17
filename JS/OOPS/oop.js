const user={
    username:"chirag",
    loginCoun:8,
    signedOut:true,

    getUsersDetails:function(){
        // console.log("Got user details  from database");
        // console.log(`username:${this.username}`);
        console.log(this); //currrent context
        //Yahi log agar mai inspect me karu then window object a jata hai becuase it becomes global context
             
    }
}
// console.log(user.username)
// console.log(user.getUsersDetails());


// const promise = new Promise()

 function User(username, logginCount, isLoggedIn){
   this.username = username 
   this.logginCount = logginCount 
   this.isLoggedIn = isLoggedIn 

   this.greeting  = function(){
    console.log(`Welcome ${this.username}`);
    
   }
//    return this  
 }

 const UserOne = new User("chirag",12,true)
 const UserTwo = new User("College",12,true)  //yaha ye owrite kar dega 
//  console.log(UserOne); // UserOne console karne par username College ayega and not chirag
//  console.log(UserTwo); // we have to use to avoid this blunder 
//  console.log(UserTwo.constructor); //[Fucntion:User]
 


function car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
}

const auto = new car(2020,"Ford",2024);
console.log(auto instanceof car); //true
