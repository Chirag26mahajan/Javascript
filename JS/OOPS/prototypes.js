// let myName = "chirag     "
// // console.log(myName.trim().length);
//  console.log(myName.trueLenght)


let myHeros = ["thor","spiderman"]
let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.chirag = function(){
    console.log(`Chirag is present everywhere`);
}

Array.prototype.heyChirag = function(){
    console.log(`Chirag says hello`);
    
}

//Be it function, array or strings everything goes through object and there is no super protoype of object 
// heroPower.chirag() // it will work

//when i use array for it 
// myHeros.chirag();
myHeros.heyChirag()
