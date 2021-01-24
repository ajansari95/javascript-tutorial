// Confusion

console.log(this);


var user = {
    firstName: "Aj",
    courseCount: 4,
    getCourseCount: function(){
        console.log("Line 10", this);
        function sayHello(){
            console.log('hello');
            console.log("line 13",this);
        }
    }
};

user.getCourseCount();  //not a regular function call
// through an object call
