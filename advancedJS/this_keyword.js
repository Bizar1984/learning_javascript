// global object is default window object. If this is used inside any global function
// and called without dot notation or window, then it refers to global object
var integerOne = 1;

function Change() {
	this.integerOne = 2;
}

var obj1 = new Change();
var obj2 = new Change();
obj2.integerOne = 3;

console.log(obj1.integerOne) // 2
console.log(obj2.integerOne) // 3
// integerOne property of BOTH instances of objects



var value = 'Call me a string';

function Mastery() {
	this.value = false;

	this.Display = function() {
		var value = true

		console.log("Without this keyword: " + value) //true
		console.log("With this keyword: " + this.value) // false

	};
}
var obj = new Mastery();
obj.Display()

var someString = "I am a outside string";

var obj = {
	someString: "I belong to an object",
	RevealYourself: function() {
		var someString = "I am inside a function";

		// console.log(someString);
		console.log(this.someString);
	}
}

obj.RevealYourself();

// call() and apply(). Main purpose is to set context of
// this inside a function irrepsective whether that function
// is called inside global scope or as object's method

let callingStuff
function WhoAreYou() {
	console.log(this.callingStuff);
}

var obj1 = { callingStuff : 50, WhoAreYou: WhoAreYou};
var obj2 = { callingStuff : 75, WhoAreYou: WhoAreYou};

WhoAreYou(); // this is UNDEFINED
WhoAreYou.call(obj1);
WhoAreYou.apply(obj2);

// bind() function
var binding = 100;

function CallingBack(callback) {
	
	callback()
};

var obj3 = {
	binding: 300,
	PointingWhere: function() {
		console.log("'this' point to " + this + ", binding = " + this.binding);
	}
};

CallingBack(obj3.PointingWhere)
CallingBack(obj3.PointingWhere.bind(obj3));


// this keyword is not magic
someFunction = function(a, b, c) {
	console.log(Math.sqrt(a + b + c));
}

// calling a function directly. This will be null (when in strict mode or via a module)
someFunction(40, 6, 3);

// when you call a function with the dot operator like this:
// someObject.someFuntion(40, 6, 3) THIS will refer to someObject

// function to add an element with a classname and any number of parameters
// function addDiv(className, ...args) {
// 	const elem = document.createElement('div');
// 	elem.className = className;
// 	elem.textContent = args.join(' ');
// 	document.body.appendChild(elem);
//   }

// addDiv('bouncing-star', 'This div element was added with a log function.', 'Any number of arguments possible.', 'In this case three....');













