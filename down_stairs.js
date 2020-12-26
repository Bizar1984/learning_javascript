//function to multiply by 2
let double = function (num) {
  return num * 2;
}

let test = double(3);
console.log(double(6))

//combine two arrays
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);

//classic array bug
let bigCities = [
  "NY",
  "Los Angeles",
  "Amsterdam",
  "Utrecht",
  "Den Haag",
  "Paramaribo",
  "Mogadishu",
];

for (let i = 1; i < bigCities.length + 1; i++) {
  let neighbourIndex = i - 1;

  console.log(bigCities[neighbourIndex])
};


let fruit = [
  "peaches",
  "bananas",
  "strawberries",
  "manzanas",
  "ananas"
];

for (let i = 1; i < fruit.length + 1; i++) {
  let neighbourIndex = i - 1
  console.log(fruit[neighbourIndex])
}

// function to print the characters in a string
function printCharacters(string) {
  for (let i = 0; i < string.length; i++)
    console.log(string[i]);
}

printCharacters("What's up?")

//creating an empty object;
let animal = {} 

animal['type'] = 'Soft and Greedy';
animal['color'] = 'Lightgreen';
console.log(animal)


//random pick from array
let animals = [
  "horse",
  "frog",
  "bull",
  "chameleon"
];

let pickRandom = Math.floor(Math.random() * animals.length);
console.log(animals[pickRandom])

//what will this empty object do?
let obj = {};
let string = "juices"

// we need to fill this object
for (let i = 0; i < string.length; i++) {
  let letter = string[i];
  obj[letter] = i;
}

for (let property in obj) {
  console.log(property + ': ' + obj[property])
  // logs the letter of a string plus the index value
}

console.log(obj)
// the filled object


//which is the longer string
function longer(a, b, __) {
  if (a.length > b.length) {
    return a;
  }
  return b;
}

console.log(longer('what about us?', 'and what about the people'));
// logs the longer string


// free entrance for people under 12. Get a list of names who meet this criterium
let studentList = [{
    name: 'Amelia',
    age: 6
  },
  {
    name: 'Josef',
    age: 11
  },
  {
    name: 'Andre',
    age: 4
  },
  {
    name: 'Derk',
    age: 49
  },
  {
    name: 'Anton',
    age: 13
  },
  {
    name: 'Oebele',
    age: 13
  },
  {
    name: 'Jessica',
    age: 78
  },
  {
    name: 'Benazir',
    age: 28
  },
  {
    name: 'Sterk',
    age: 49
  }
];

function freeEntrance(list) {
  for (let element of list) {
    if (element['age'] < 12) {
      console.log(element['name'])
    }
  }
}
// dont forget to CALL this FUNCTION
freeEntrance(studentList);

//function to find the last letter
function lastLetter(word, __) {

  let lastIndex = word.length - 1
  return word[lastIndex];
};

console.log(lastLetter('malcolmX'))

let wordList = [
  'able',
  'ale',
  'apple',
  'raspberry',
  'bananas'
];

// find the longest word in an array
function longestWord(array, __) {
  let longestWord = ''
  for (var word of array) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord
}
console.log(longestWord(wordList));
