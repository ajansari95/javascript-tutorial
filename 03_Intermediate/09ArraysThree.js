// fill and filter

var  testArray = [2,4,5,6,7,8,9,4];

console.log(testArray.fill(0));
// fill(element, start, end)

const myNumbers = [23,43,56,75,78,98];

const result = myNumbers.filter((num) => (num != 56));

console.log(result);