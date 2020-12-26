function KeywordNew() {
	this.x = false;
	
}

var obj1 = new KeywordNew();
console.log(obj1.x);

// KeywordNew is a constructor function. The new keyword constructs 
// and returns an object, or instance, of this function

function MyFunc() {
	var myVar = 36;
	this.x = Math.sqrt(myVar);
}

MyFunc.prototype.z = (3.1418 * 180) / Math.PI;

var obj1 = new MyFunc()
console.log(obj1.x);
console.log(obj1.z)

// fun with errors
try {
	throw {
		number: 101,
		message: "Error. Your computer will self-destruct in 10 seconds"
	};
}
catch(ex) {
	var err_number = document.getElementById("err_number")
	err_number.innerHTML = (ex.number + " " + ex.message);
}

// ignoring stuff
function MyFunc() {
	this.x = true;

	return false;  // new keyword ignores primitive return values
}

var obj = new MyFunc();
console.log(obj.x);

// returning non primitive value
function MyFunction() {
	this.x = Math.PI

	return { a: Math.PI / 2};
}

var obj4 = new MyFunction();
console.log(obj4.x) // undefined
console.log(MyFunction())

// Thus new keyword builds an object of a function!
