function Variables() {
	this.type = 'Boolean';
	this.primitive = true;	
}

var variableOne = new Variables(); // instance of object
variableOne.string = "Property added to Variables Object";
console.log(variableOne.string);

// property string only added to variableOne
// how we add property to all new instances of Variables?

Variables.prototype.string = "String property added to Variables constructor function!; "

var variableTwo = new Variables();
console.log(variableTwo.javascript);
console.log(Variables.prototype);

// changing the string value
Variables.prototype.string = "I belong to string property and will be available for future instances"

console.log(variableTwo.prototype);  // undefined
console.log(variableTwo.__proto__)
console.log(typeof variableTwo.__proto__)

// checking the output for a new instance
var variableThree = new Variables();
console.log(variableThree.string);

// object's prototype
function Terrorist() {
	this.name = 'Breivik';
	this.gender = 'male';
}

Terrorist.prototype.askQuestion = function(){
	console.log("How many did you slaughter today?");
};

var terroristObjOne = new Terrorist();
var terroristObjTwo = new Terrorist();
terroristObjOne.askQuestion(); // double console log undefined

var proto = Object.getPrototypeOf(terroristObjTwo) 
console.log(proto) // returns Terrorist prototype object

console.log(proto.constructor); // returns terrorist function

// changing prototype
Terrorist.prototype.age = 36;
Terrorist.prototype = { age: 38};

var terroristObjThree = new Terrorist();
console.log(terroristObjOne.age, terroristObjThree.age);












