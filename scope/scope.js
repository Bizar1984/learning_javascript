/* alert("This is alert box!"); display string message

alert(100); display number

alert(true); display boolean */

// var userPreference;

// if (confirm("Do you want to save changes?") == true) {
//   userPreference = "Data saved successfully!";
// } else {
//   userPreference = "Save Cancelled!";
// }

// var age = prompt("Please enter your age in years", "20");

// if (age != null) {
//   alert("You have entered " + age + " years");
// }


// scope of variables and such
console.log("what is your scope????")
var userName = "John the Redneck";

function modifyUsernameOne() {
	userName = "John became ultra-left";
};

function showUserName() {
	console.log(userName);
};

showUserName();

modifyUsernameOne();
showUserName();

// another example
function createUserName() {
	userName = "Rene the Lone Wolf"; // without var becomes global
};

function modifyUserName() {
	if(userName)
		userName = "Rene has been properly radicalized";
};

function showUserName() {
	console.log(userName);
};

createUserName();
showUserName();

modifyUserName();
showUserName();

// next one
var age = 36;
function setAge() {
	if(age < 45) {
		console.log("personX is " +age+ " years old");
	};
};

function showAge() {
	console.log("I know: " +age+ " is pretty grandpa-style");
};

setAge();
showAge();

//
function NoBlockLevelScope() {
	if(1 > 0) {
		var myVar = "No Block Level Scope"
	}
	console.log(myVar);
};

NoBlockLevelScope();

//eval
eval("console.log('this is executed by eval()')");

// calling a function with eval()
var result;

function RaiseToForce(val1, val2) {
	return val1 ** val2;
}

eval("result = RaiseToForce(2, 8);")
console.log(result);

// converting a string to JSON object
var str = '({"firstName":"Bill","lastName":"Gates"})';
var obj = eval(str);
console.log(obj.firstName); 

