// var num =2;

// function sayMe(){
//     console.log("Say me");//execution context
// }

// // sayMe();//execution context 
// tipper("80")

function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}

// tipper("5");
// tipper(5);
bigTipper("200");  //console--> big tipper is not a function

//big tipper is variable and scanned by 
//execuution context and made undefined
var bigTipper = function (a){
    var bill = parseInt(a);
    console.log(bill + 15);
}

// code hoisting.

console.log(name2);
var name2 = "ajaz";
