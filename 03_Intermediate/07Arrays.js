
var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Rajasthan","Delhi", "Mumbai", "Assam");

console.log(states[0]);

console.log(states.length);
states[0] = "Punjab";
console.log(states);


var user = ["ajaz", "aj@ncl.com", 3, 34, true];
// not good

user.pop();
user.pop();

console.log(user);

user.unshift("NEW VALUE");
//new element at the start
// cost high

console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf(3));
// -1 for not present

console.log("hitesh");

// ["h", "i","t"]

console.log(Array.from("hitesh"));