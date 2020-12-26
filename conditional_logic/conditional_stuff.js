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


if(6 * 6 != 34) {
	console.log("six times six is not 34");
};

if(1=="1") {
	console.log("== operator does not consider type of operands");
};

if(6==="6") {
	console.log("=== operator considers types operands");
};

var mySkills = 650;
var yourSkills = 410;

if(mySkills > yourSkills) {
	console.log("mySkills are greater than yours")
}
else {
	console.log("yourSkills are greater than mine");
}

// next section
var a = false;

switch(a) {
	case 1:
		alert('case 1 is executed');
		break;
	case "bombadillo":
		alert('a equals bombadillo')
		break;
	case 6 > 12:
		console.log('expression returns false(var a)');
		break;
	default:
		alert('default case is executed');
};

// combined switch cases
var theWeatherToday = "cloudy";

switch (theWeatherToday) {
	case 1:
	case "cloudy" || "raining":
	case true:
		console.log("case 1, 2 and 3 executed");
		break;
	case "sunshine":
		alert("sun is shining");
		break;
	default:
		console.log("default case executed");
};

var arr = [10, 11, 12, 13, 14];

for (var i = 0; i < 5; i++) {
	console.log(arr[i]);
};

var arrTwo = [20, 21, 22, 23, 24];
var i = 0; 

for (; ;) {
	if (i >= 5)
	break;

	console.log(arrTwo[i]);

	i++;
};

// while loop
var x = 3
while(x > -1) {
	console.log(x);
	x--;
};

// do while loop. Exexutes at least once
var i = 0;

do{
	console.log(i);
	i++;
} while(i <= 3)


