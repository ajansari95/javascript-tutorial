var isEven = (element)=>{
    // if(element%2===0){
    //     return true;
    // }
    // return false;
    return element % 2 === 0;
};//arrow function

//  callback funstion

// var result = [2,4,5,6,7].every(isEven)//looks for evry single element

// console.log(result);

var result = [2,4,5,6,7].every((e) => {
    return e%2 ===0;
});

var result = [2,4,5,6,7].every((e) =>  (e%2 ===0));
console.log(result);
