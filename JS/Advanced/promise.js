// //Promise 1
// const promsieOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task is complete')
//         resolve()
//     },1000)
// })

// promsieOne.then(function(){
//     console.log("promise consumed");
// })

// //.then ka direct realtion hai resolve ke sath
// //2 promsie
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");

// })

// //3 Promise
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:'Chirag',email:"chiragmahajan26.cm@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
// console.log(user);
// })

//Promise 4
// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username:'Chirag',passowrd:'123'});
//         }else{
//             reject('Error:Something went wrong')
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>console.log("the promise is either resovled or rejected"))

//Promise 5
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript", passowrd: "123" });
    } else {
      reject("Error:JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const repsone = await promiseFive;
    console.log(repsone);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//     try{
//         await fetch('https:/.jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data);
//     }
//     catch(error){
//         console.log("E:",error);
        
//     }
// }
// getAllUsers();


fetch('https://api.github.com/users/Chirag26mahajan')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
})
.catch((error)=>console.log(error))


