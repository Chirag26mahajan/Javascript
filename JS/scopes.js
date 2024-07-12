let a = 300;
if(true){
    let a = 10;
}
// console.log(a);

function one(){
    const username = "chirag"
    function two(){
        const website ="youtube"
        console.log(username);  //chota bade se ice cream le sakta hai
    }
    // console.log(website);  //ye outside scope a gaya fn two ke so will show an error
    two()
}
// one()


if(true){
    const username = "chirag"
    if(username==="chirag"){
        const website = " youtube"
        // console.log(username  + website);
    }
}


// -----------------important------------------
console.log(addOne(3));
function addOne(num){
    return num+1
}
// numbers(3) this will show and error hoisting
const numbers = function(num){
    return num+2;  
}
