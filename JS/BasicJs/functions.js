function addNum(num1,num2){
    console.log(num1+num2);
}
// const result = addNum(3,5);
// console.log(result); //upar conlose me to ayega output 8 but here undefined

// addNum(); 
//Nan will come if i dont give any value to the function
// addNum(3,7); //10
// addNum(3,"2"); //32
// addNum("2",3,4);

function newAddition(num1,num2){
    let result = num1+num2;
    return result
    console.log("chirag"); //this will never print because it is an uncreachable code 
}

const result = newAddition(2,3);
// console.log(result);


function userLoggedIn(username){
    if(username==undefined){
        console.log("Enter a name");
        return;
    }
    return `${username} just logged in`
}

// console.log(userLoggedIn());

function calculateCart(val1,val2,...num){
    return num
}
// console.log(calculateCart(200,400,500,2000)); //output 500 2000

// const user = {
//     username:"chirag",
//     price: 200
// }

function getDetails(userss){
    console.log(`welcome back ${userss.username} and your price is ${userss.price}`);
}

// getDetails(user); one method is this

getDetails({
    username:"chirag",
    price:1
})


const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1];

}
console.log(returnSecondValue(myNewArray));
