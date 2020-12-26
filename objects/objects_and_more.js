// var userPreference;

// if (confirm("Do you want to save changes?") == true) {
//   userPreference = "Data saved successfully!";
// } else {
//   userPreference = "Save Cancelled!";
// }
// alert(userPreference)

// var age = prompt("Please enter your age in years", "20");

// if (age != null) {
//   alert("You have entered " + age + " years");
// }

// Operators
var one = 1;
var two = 'two';
var three;

var add = one + two;
console.log(add);

// Comparison operators
var a = 5,
	b = 10,
	c = "5",
	x = a;

console.log(a == c);
console.log(a === c);
console.log(a != c); // false

console.log(a != b) && (a < b);
console.log(a < b) || (a == b);
console.log(!(a < b)); // Is a greater than b?

var a = 10,
	b = 5;

var c = a > b? a : b;
var d = a > b? b : a;
console.log(c, d);

var str = 'Entering string section';
console.log(str[0]);
console.log(str.length);

/* for(var i = 0; i < str.length; i ++)
	console.log(str[i]); */

for (var ch of str)
	console.log(ch);

var new_str = 'Concatenate' + ' ' + 'this' + ' ' + 'now';
console.log(new_str);

var str1 = "This is a 'simple' string ";

var str1 = "This is backward slash \"simple\" string";
console.log(str1);

var str_obj = new String('Strings or Objects');
var str_obj2 = new String('Strings or Objects');
console.log(str_obj == str_obj2);
console.log(typeof(str_obj));

// Numbers
console.log(' Max Value: ' + Number.MAX_VALUE +
	'\n Min Value:' + Number.MIN_VALUE +
	'\n Negative Infinity:' + Number.NEGATIVE_INFINITY +
	'\n Nan:' + Number.NaN)

var YES = true;
var NO = false;

if(YES) {
	console.log('Condition yes, text will be displayed')
}

if(!(NO)) {
	console.log('No is not false, iow true, so this will be displayed as well')
}

var bool = new Boolean(false);
console.log(bool);

var bool1 = new Boolean("");
console.log(bool1);

var bool2 = new Boolean("Boolean with some text");
console.log(bool2);

var result = (1 > 2);
console.log(result.valueOf());

var emptyObject = {};

var person = { firstName: "Bombadil"}; // single property object

// object with single method
var message = {
	showMessage: function(val) {
		alert(val);
	}
};

// object with properties & method
var person = {
	firstName:"James",
	lastName: "Bond",
	age: 36,
	getFullName: function() {
		return this.firstName + ' ' + this.lastName
		
		}
	};

console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.getFullName());

var personObj = new Object();
personObj.firstName = "Nabiz";
personObj.lastName = "Muktar";
personObj.age = 29;
personObj.getPersonInfo = function() {
	return this.firstName + ': ' + this.age + ' years old';
}

console.log(personObj.getPersonInfo());

// My own object
var programming = new Object();

programming.skills = "Javascript";
programming.application = ["Web-development", "Animation"];
programming.level = "Expert";
programming.getProgrammingInfo = function() {
	return this.skills + ' ' + this.application + ' ' + this.level;
}

/* for(var key in programming) {
	alert(key);
} */

console.log(programming.getProgrammingInfo());

console.log(programming.application[1]);

// Pass by reference
function changeFirstName(per) {
	per.firstName = "No more Billy";
}

var person = { firstName: "Billy"};

changeFirstName(person)
console.log(person.firstName);

// Object reference. Object is passed by reference from one function to another
var person = { firstName: "John"};
var anotherPerson = person;
anotherPerson.firstName = "Billy is back";
console.log(person.firstName);

// Nested object. Assigning another abject as property of object
var human = {
	firstName: "Angela",
	age: 25,
	address: {
		id: 398,
		country: "The Netherlands"
	}
};

console.log(human.address.country);











 

