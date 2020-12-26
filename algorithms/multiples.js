// multiples_problem
var arr = [];

	for(var i = 3; i < 1000; i += 3) {
		arr.push(i);
	}

	var sum = arr.reduce(function(a, b) {
		return a + b;
}, 0);

console.log(sum);

// sum of 5
var arrFive = [];
	
	for(var i = 5; i < 1000; i +=5) {
		arrFive.push(i);
	}

	var sumTwo = arrFive.reduce(function(a, b) {
		return a + b;
	}, 0);

console.log(sumTwo);

// duplicates table of 15
var arrDupli = [];
	
	for(var i = 15; i < 1000; i +=15) {
		arrDupli.push(i);
	}

	var sumThree = arrDupli.reduce(function(a, b) {
		return a + b;
	}, 0);

console.log(sumThree);

function Answer() {
	return (sum + sumTwo) - sumThree;
};

console.log(Answer())

