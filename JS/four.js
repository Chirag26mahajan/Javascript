// for (const iterator of object) {
    

// }

// for (const key in object) {
   
// }


const obj = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    html:"web"
};

for (const key of Object.keys(obj)) {
    console.log(`${key} --> ${obj[key]}`);
}
// for (const key in obj) {
//     console.log(`${key} is shortcut for the word: ${obj[key]}`);
// }


// const name = setTimeout(function add(){
//     console.log("added");
// },2000);
// clearTimeout(name);
// console.log(name);   timeout id to ayegi but added print ni hoga