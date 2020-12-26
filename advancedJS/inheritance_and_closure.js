// time for some inheritance practice
console.log("Inheritance practice time!")

function Actor(firstName, lastName) {
    this.firstName = firstName || "unknown";
    this.lastName = lastName || "unknown";
};

Actor.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName;
}

// derived class
function Actress(firstName, lastName, rating) {
    Actor.call(this, firstName, lastName);
    this.Rating = rating || 0;
}

// Actor.prototype = Actress.prototype
Actress.prototype = new Actor;
Actress.prototype.constructor = Actress;

var actressOne = new Actress("Salma", "Hayek", 8.5);

console.log(actressOne.getFullName());
console.log(actressOne instanceof Actor);
console.log(actressOne instanceof Actress);

// closure in Javascript. Closure means an inner function always has access to
// the vars and paramaters of its outer function, even after the outer function has returned
function Outerfunction() {

    var outerVariable = 10;

    function Innerfunction() {
        console.log(outerVariable);
    };
    Innerfunction();
}
Outerfunction();

// another example
function OuterfunctionTwo() {
    var outerVariableTwo = 75;

    function InnerfunctionTwo() {
        console.log(outerVariableTwo);
    }
    return InnerfunctionTwo;
}

var innerFunc = OuterfunctionTwo();
innerFunc();

// a function can return another function. Function assigned to variable is function expression
// inner function does not hold a copy of outer variable but a reference, that means the value 
// of outer variables will be changed using inner function. Example;
function Counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 2;
    };
    return IncreaseCounter;
}
var counter = Counter();
console.log(counter());
console.log(counter()); // and yes it changes

// cosure is valid in multiple levels of inner functions
function NewCounter() {
    var counter = -6;

    setTimeout(function() {
        var innerCounter = 2;
        counter += 1;
        console.log("counter = " + counter);
    
        setTimeout(function () {
                    counter += 2;
                    innerCounter += 1;
                    console.log("counter = " + counter + ", innerCounter = " + innerCounter)
                }, 500);
    }, 500)
};
NewCounter();
// only if the inner function accesses the variables of outside function its called closure
var num = (function() {
    var privateCounter = 5;
    function changeBy(val) {
        privateCounter *= val;
    }
    return {
        multiply: function() {
            changeBy(10)
        },
        multiplyNeg: function() {
            changeBy(-2);
        },
        value: function(){
            return privateCounter;
        }
    };
})();

console.log(num.value());
num.multiply();
console.log(num.value());
num.multiplyNeg();
console.log(num.value());
// multiply and multiplyNeg and value become public because included in return object
// changeBy private because its not returned and only used internally by multiply methods


