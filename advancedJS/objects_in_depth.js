'use strict'

// objects in depth
var aboutToTackleThis = true;
	if(aboutToTackleThis) {
		console.log("Yes, you will tackle this!")
	};

// lets use a constructor function
function bikingTrip() {
	this.bike = "tourfiets";
	this.shelter = "tent";
	this.message = function() {
		alert("Have fun on your trip");
	}
}

var bikingTripOne = new bikingTrip();

//console.log("Type of bike: " + bikingTripOne.bike + ". Type of shelter: "
//	+ bikingTripOne.shelter);

// use Object.keys() method to retrieve all the properties name
// for the specified object as a string array
var secondBikingTrip = new bikingTrip();
console.log(Object.keys(secondBikingTrip));

// use for-in loop to retrieve all the properties of an object
function Adulterer() {
	this.title = "Unknown";
	this.name = "Ms Unfaithful";
	this.message = function() {
		console.log("A person who commits adultery")
	}

}

var adultererOne = new Adulterer();

for(var prop in adultererOne) {
	console.log(prop);
}

// property descriptor
console.log(Object.getOwnPropertyDescriptor(adultererOne, 'title'))
console.log(Object.getOwnPropertyDescriptor(adultererOne, 'name'))
adultererOne.message();

// preventing change of attribute
function Animal() {
	this.reptiles = "Snakes";
	this.mammals = "Gorillas";
	this.insects = "Wasps";
	this.amphibians = "Frogs";
}

var animalOne = new Animal();
Object.defineProperty(animalOne, 'mammals', {configurable:false});

try {
	Object.defineProperty(animalOne, 'reptiles', {writable:true});
}
catch(ex) {
	console.log(ex.message)
}

animalOne.reptiles = "Crocodiles";
console.log(animalOne.reptiles)

// deifne new properties with getters and setters
function Exercise(){
	this.name = "Coding along";
	this.type = "Learning from Others"
	this.duration = 20;
}

var exerciseOne = new Exercise();
Object.defineProperty(exerciseOne, 'fullExercise', {
	get:function() {
		return this.name + ' ' + this.type + ' ' + this.duration;
	},
	set:function(_fullExercise) {
		this.name = _fullExercise.split(' ')[0];
		this.type = _fullExercise.split(' ')[1];
		this.duration = _fullExercise.split(' ')[2];
	}
});

exerciseOne.fullExercise = "Animating Visuals 30";
console.log(exerciseOne.type)
console.log(exerciseOne.duration)
console.log(exerciseOne.name);


console.log(exerciseOne)

exerciseOne.fullExercise = "Algorithms Logic 15";
console.log(exerciseOne)













