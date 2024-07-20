const user= {
    username:"chirag",
    price:100,

    weclomeMessage:function(){
        console.log(`${this.username}, Welcome to the club`);
        console.log(this);
    }
}

// user.weclomeMessage()
// user.username = "abhay"
// user.weclomeMessage()


const chai  = function(){
    let username = "chirag"
    console.log(this);
}
// chai()

//Arrow Function
const addTwoNum = (num1,num2)=>num1+num2
// console.log(addTwoNum(3,5));

const naming = (num1,num2) =>({usrname:"chirag"})
console.log(naming(3,4));