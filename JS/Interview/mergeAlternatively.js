
let s1 = "Hello";
let s2 = "World12";
let finalStr = "";

for(let i=0;i<(s1.length>s2.length?s1.length:s2.length);i++){
    if(i<s1.length) finalStr+=s1.charAt(i);
    if(i<s2.length) finalStr+=s2.charAt(i);
}
console.log(finalStr);
