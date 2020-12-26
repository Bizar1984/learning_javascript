var car;
var func1 = function() {
	func2();
}

var func2 = function() {
	func3();
}

var func3 = function() {
	car = new Car();
	car.funcX();
}

var Car = function() {
	this.brand = "BMW";
	this.color = "purple";
	this.funcX = function() {
		this.funcY();
	}

	this.funcY = function() {
		this.funcZ();
	}

	this.funcZ = function() {
        console.trace("trace this");
	}
}

func1();

// console table
var animals = [
    { animal: 'Horse', name: 'Henry', age: 43 },
    { animal: 'Dog', name: 'Fred', age: 13 },
    { animal: 'Cat', name: 'Frodo', age: 18 }
];
 
console.table(animals);
