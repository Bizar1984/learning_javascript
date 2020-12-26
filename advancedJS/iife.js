// last chapter. Immediately invoked function expression
// javascript considers the LASTT definition of a function
// if functions have the same name

// IIFE wont pollute global scope even when functions have same name
// parenthesis() cannot contain statements, only expression

var x = 6;
var myIIFE = (function() {
    if(x > 9) {
        console.log(x + " is greater than 9");
    }
    else {
        console.log(x + " is smaller than 9")
    }
})();

var y = -4;
var x = 24696 + y;
var myIIFE = (function() {
    if(x > 9) {
        console.log(x + " is greater than 9");
    }
    else {
        console.log(x + " is smaller than 9")
    }
})();

// above example is called IIFE
// it works although they have the same name

var userName = "Billy the Kid";

(function(name) {
    
    function display(name) {
        console.log("Hello " + userName);
    }

    display(name);
})(userName);

// above ex shows you can also pass arguments in IIFE
// and yes, i am officially done with the tutorial from
// www.tutorialsteacher.com






