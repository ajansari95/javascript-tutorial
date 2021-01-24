// TODO:  falsy values -- treated as falls
// undefined
// null
// 0
// ''
// NaN --> not a number


var user = null; //undefined

if(user){
    console.log("Condition is true");
}


console.log(2 + "2");//22

var cohersion_check = "2";

if(2 == cohersion_check){
    console.log("true");
}//strict ===