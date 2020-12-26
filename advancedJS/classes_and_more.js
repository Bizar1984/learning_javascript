'use strict'

// creating a funtion that acts as a class
function PCskills() {
  this.data_analysis = "unknown";
  this.web_dev = "unknown";
}

var firstSkill = new PCskills();
firstSkill.data_analysis = "beginner";
firstSkill.web_dev = "moderate";

console.log("My web_dev skill is currently: " + firstSkill.web_dev);

// now add some methods in a class
function campingGear() {
  this.cooking = "unknown";
  this.sleeping = "unknown";
  this.other = "unknown";
  this.listItems = function () {
    // function expression acts like a method of class
    return (
      "For cooking: " +
      this.cooking +
      ". For sleeping: " +
      this.sleeping +
      ". Uncategorized: " +
      this.other
    );
  };
}

// cooking, sleeping and other are variables which act like properties
var firstTrip = new campingGear();
firstTrip.cooking = "stove and pans";
firstTrip.sleeping = "sleepingbag and mattress";
firstTrip.other = "flashlight and a fishing rod";

// now campingGear acts like a class and firsttrip and secondtrip will be its objects (instances)
// each object holds values seperately because of this keyword
var secondTrip = new campingGear();
secondTrip.cooking = "cutlery and a lighter";
secondTrip.sleeping = "a nice and soft pillow";
secondTrip.other = "toothbrush";

console.log(firstTrip.listItems() + ". Second trip: " + secondTrip.listItems());

/* a function can have one or more paramaters. This can be uses like a constructor where 
you can pass paramater values at the time of creating a new object */
function Person(FirstName, LastName, Age) {
  this.firstName = FirstName || "unknown";
  this.lastName = LastName || "unknown";
  this.age = Age || 25;
  this.getFullName = function () {
    return (
      this.firstName +
      " " +
      this.lastName +
      " is walking around on earth for " +
      this.age +
      " years!"
    );
  };
}

var personOne = new Person("Bomba", "the Magician", 36);
console.log(personOne.getFullName());

var personTwo = new Person("Nabiz", "the African Flower", 29);
console.log(personTwo.getFullName());

// properties with getters and setters
function Colors() {
  var _primaryColor = "unknown";
  var _secondaryColor = "unknown";

  Object.defineProperties(this, {
    PrimaryColor: {
      get: function () { return _primaryColor},
      set: function (value) { _primaryColor = value},
    },
    SecondaryColor: {
      get: function () { return _secondaryColor},
      set: function (value) { _secondaryColor = value},
    },
  });
}
/* the Colors function() creates Primary- and SecondaryColor properties with the defineProperties 
method. The first argument is this, which binds the properties to the calling object. Second
argument is an object that includes a list of properties to be created. Property defined 
with get and set function */

// primary colors
var firstPrimaryColor = new Colors();
firstPrimaryColor.PrimaryColor = "red"; // setting the value of the property PrimaryColor
var secondPrimaryColor = new Colors();
secondPrimaryColor.PrimaryColor = "blue";

// secondary colors
var firstSecondaryColor = new Colors();
firstSecondaryColor.SecondaryColor = "purple"; // setting the value of the property SecondaryColor
var secondSecundaryColor = new Colors();
secondSecundaryColor.SecondaryColor = "yellow";

console.log(
  firstPrimaryColor.PrimaryColor +
    " and " +
    secondPrimaryColor.PrimaryColor +
    " are primary colors and " +
    firstSecondaryColor.SecondaryColor +
    " and " +
    secondSecundaryColor.SecondaryColor +
    " are secondary colors. I am not kidding, you can look this up... "
);

// creating read only.. without the set method
function Car(type) {
  var _type = type || "unknown";

  Object.defineProperties(this, {
    Type: {
      get: function () {
        return _type;
      },
    },
  });
}

var carOne = new Car();
// carOne.Type = "audi";
// console.log(carOne.Type);   // without the set method this returns unknown

// multiple properties the neat way
function Person(firstName, lastName, age) {
  var _firstName = firstName || "unknown";
  var _lastName = lastName || "unknown";
  var _age = age || 20;
 
  Object.defineProperties(this, {
    FirstName: {
      get: function () { return _firstName },
      set: function (value) { _firstName = value },
    },
    LastName: {
      get: function () { return _lastName },
      set: function (value) { _lastName = value },
    },
    Age: {
      get: function () { return _age },
      set: function (value) { _age = value },
    }
  });

  this.getFullName = function () {
    return this.FirstName + " " + this.LastName + " is " + this.Age + " years old";
  };
}

var personOne = new Person();
personOne.FirstName = "Jack";
personOne.LastName = "the Ripper";
personOne.Age = 27;

console.log(personOne.getFullName());

// moving on, you worked hard! next section: JS Object in Depth
var programmingLanguages = {
  interpreted: [ 
    "Javascript",
    "Python",
    "Ruby"],
  high_level: "c++" 
};

console.log(Object.getOwnPropertyDescriptor(programmingLanguages, "interpreted"));
// if writable == false, value cannot be changed and will throw exception in strict mode

function learningStrategies() {
  this.traditional = "reading";
  this.associative = "brainstorming, mindmapping";
  this.handsOn = "problem-solving";
  this.other = "summarizing";

}

var learningStrategiesOne = new learningStrategies();
console.log(Object.getOwnPropertyDescriptor(learningStrategiesOne, 'traditional'));

// object.defineProperty
Object.defineProperty(learningStrategiesOne, 'handsOn', { writable: false });

try {
  learningStrategiesOne.handsOn = "algorithms";
  console.log(learningStrategiesOne.handson);
}

catch(ex) {
  console.log(ex.message)
}

for(var prop in learningStrategiesOne) {
  console.log(prop)
}

Object.defineProperty(learningStrategiesOne, 'associative', { enumerable: false})
console.log("After setting enumerable to false: ")
for(var prop in learningStrategiesOne) {
  console.log(prop)
}

// edit property descriptor

