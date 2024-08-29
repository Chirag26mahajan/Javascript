const obj = {
    name:"Chirag",
    email:"chirag@gmail.com",
    // address:{  //either we can create an empty address object

    // }
}
//2 we can put it in if loop
// if(obj.address)
// {
//     console.log(obj.address.city);
    
// }

//3 optional Chaining
   console.log(obj?.address?.city)  //" ?."   gives output undefined

// console.log(obj.address.city) //undefined output to fix this either put it in if else loop or create empty address