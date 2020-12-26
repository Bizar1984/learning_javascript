var person = {
	fullName: function(city, country) {
		return this.firstName + " " + this.lastName +
		", " + city + ", " + country;
	}
}

var personOne = {
	firstName: "John",
	lastName: "Wick"
};

console.log(person.fullName.call(personOne, "Amsterdam", "The Netherlands"));

// This example calls the fullCar method 
// of car, using it on firstCar
var car = {
	fullCar: function() {
		return this.type + " " + this.color;
	}
}

var firstCar = {
	type: "BMW- 6 series",
	color: "Darkgreen"
}

console.log(car.fullCar.call(firstCar));