// pretty much everything apart from primitive 
// values inherit from this unique type

let learningPlan = {
	turials: "Full stack application",
	documentation: "node.js",
	code_analysis: "download from Github",
	math_skills: "animation and game development",

	message: function () {
		console.log("organise and become an awesome programmer");
	}
};

console.log(learningPlan);

// accessing properties using array syntax. 
// Useful when you dont know the name of the property you want to change at runtime
let propertyName = "math_skills";
console.log(learningPlan[propertyName]);

learningPlan.social_learning = "becoming part of communities";
learningPlan["algoritms"] = "functions, statements and more";
console.log(learningPlan);

// updating the value
let documentation = "react and php";
learningPlan.documentation = documentation;
console.log(": time for an update, changing the value of documentation...");
console.log(learningPlan);
/* JavaScript is designed on a simple object-based paradigm. 
An object is a collection of properties, and a property is 
an association between a name (or key) and a value. 
A property's value can be a function, in which case 
the property is known as a method */ 

// invoke function inside object
learningPlan.message();

// it is very common to use functions to create new objects
function AnimationScores(gamingDevelopment, Canvas) {
	this.gamingDevelopment = gamingDevelopment;
	this.Canvas = Canvas;
};

let animation_scores = new AnimationScores("spaceInvaders", "objectCollision");
console.log(animation_scores)

// removing keys and values
var obj = { one: 1 }
obj.one = undefined;
obj.one = null;
console.log(obj);

delete obj.one;
console.log(obj);

// has own property method
client = new Object();
client.connect = 'true';
console.log(client);  // logs connect is true

function foo() {   // a function to replace a property
	client.newConnect = client.connect
	delete client.connect
};

console.log(client.hasOwnProperty('connect')); // returns true

foo();  // invoke function
console.log(client.hasOwnProperty('connect')); // now it returns false
console.log(client);
console.log(client.newConnect);

// convert to and from json
const myFam = {
	brother: "mannoLoco",
	father: "paddieFrederik",
	moms: "maddie",

	//toJSON: () => ({'the_youngest': 'bombohre'})  A function to override default behavior of toJSON method
};

console.log(JSON.stringify(myFam));

// now convert json back to javascript
const ourJSON = '{"brother":"mannoLoco","father":"paddieFrederik","my moms":"maddie"}'
const fam_members = JSON.parse(ourJSON);
console.log(fam_members);



	







