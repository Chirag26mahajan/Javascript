const str = "Hey JS! You R Amazing";
const vowels=['a','e','i','o','u'];

function countVowels(data){
    let count  = 0;

    data.toLowerCase().split("").forEach((ch)=>{
        vowels.includes(ch)  && count++;
    })
    return count;
}
const numOfVowels = countVowels(str);
console.log(numOfVowels);
