const user = {
    name:"Chirag",
    "Like Birds":true //for string key and having space in between we use " "
}

console.log(user["Like Birds"]);
delete user.name;
console.log(user);
