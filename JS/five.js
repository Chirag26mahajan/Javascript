const coding = ["java","js","python","cpp"]
// coding.forEach(function (item){
//     console.log(item);
// })


// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const mycoding = [
    {
        language:"Javascript",
        languageFileName:"js"
    },

    {
        language:"Java",
        languageFileName:"java"
    },

    {
        language:"python",
        languageFileName:"py"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageFileName);
})