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

// Nested object. Assigning another object as property of object
var human = {
	firstName: "Angela",
	age: 25,
	address: {
		id: 398,
		country: "The Netherlands"
	}
};

console.log(human.address.country);

// Dates
var currentDate = new Date();
console.log(currentDate);

var dateOne = new Date("19 February, 1984 20:21:44");
var dateTwo = new Date("2 3 2015");
console.log(dateOne, dateTwo);

var dateNew = new Date('6-30-2020');
console.log(dateNew.getYear(), dateNew.getFullYear(), dateNew.getUTCDate());

// Date formats ISO
var dateISO = new Date('2015-02-10T10:12:50.5000z');
console.log(dateISO);
dateISO.toDateString();
dateISO.toLocaleDateString();
dateISO.toGMTString();
dateISO.toUTCString();
console.log(dateISO.toGMTString(), dateISO.toUTCString());

// convert to DD-MM-YYYY
var myDate = new Date('2-19-1984'); // M-DD-YYYY

var d = myDate.getDate();
var m = myDate.getMonth() + 1;
var y = myDate.getFullYear();

var dateString = (d <= 9 ? '0' + d : d) + '-' + (m <= 9 ? '0' + m : m) + '-' + y;
console.log(dateString);

var date = new Date(Date.parse("5/2/2015"));
console.log(date)
console.log(date.getTimezoneOffset());

// time for some arrays
var stringArray = new Array("one", "two", "infinity");
	for (var i = 0; i < stringArray.length; i++) {
		stringArray[i]
	}
console.log(stringArray);

// null conditional expression
var myVar = null;
	if(myVar)
		console.log("myVar is not null");
	else
		console.log("myVar is null");

// functions
function showMessage() {
	console.log("message logged with a function");
}
showMessage();

function displayMessage(firstName, lastName, randomNumber) {
	
	console.log("Hello" + " " + arguments[0] + " " + 
		lastName + ": " + randomNumber);
	
	for(var i=0; i<arguments.length; i++) {
		alert(arguments[i]);
	};

};

// displayMessage("Bomba", "The Fascinator", 10000);

function multiple(x) {
	function fn(y)
	{
		return x * y;
	}

	return fn;
}
var triple = multiple(3);
console.log(triple(3));
// function which returns another function


// anonymous functions
var showMessage = function() {
	console.log("Show yourself right now!");
};

var sayHello = function(firstName) {
	console.log("Welcome back " + firstName);
};

showMessage();
sayHello("Billy the Kid");

// nested function
function LastMessage(subjectX)
{
	function Welcoming() {
		alert("Watch out for " + subjectX);
	}

	return Welcoming()
}
LastMessage("Stevie the Schizofrenic")




















 

