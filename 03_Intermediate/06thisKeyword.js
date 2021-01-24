// TODO: part1 for this keyword
// get current global context


console.log(this)
// empty scope {}

var game = "basketball";

function sayName(){
    var name = "ajaz";
    console.log(this);
}

sayName();

// in browser different-- confusion?? window object 