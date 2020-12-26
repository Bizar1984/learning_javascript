//Faculty function. Hoe werkt dit?
function ftl(n) {
    if (n===1){
        return 1;
    }
    return n * ftl(n-1)
};

// console.log(ftl(4));

//Some operators
let jouke = 40;
let gift = 20;
let nabiz = 0;

jouke -= gift;
nabiz += gift;
// console.log('Jouke has ' + jouke + ' euro, and nabiz has ' + nabiz + ' euro');

//Selecting a random item from an array
const musicItems = [
'microphone',
'cables',
'monitor speakers',
'cassette'
];
musicItems.push('soundcard');

const randomItem = musicItems[Math.floor(Math.random() * musicItems.length)];

// console.log(randomItem);


// length of the array is 3. We start counting at 0
const travelItems = [     
    'backpack',
    'tent',
    'flashlight',
    'swimming pants'
];

var lastIndex = travelItems.length -1;



// finding characters and index number of several strings in an array
let Array = [
    "de Niro",
    "Pacino",
    "Pesci",
    "Bombadil"
];

let obj = {};
let string = Array[Math.floor(Math.random() * Array.length)]

for (let i = 0; i < string.length; i++) {
let letter = string[i] 

// letter refers to the letters in the string, Outputs just the letters

obj[letter] = i;
console.log(obj[letter])

/*adding the letter variable as a property to the empty object and assigning the value i
Runs 5 times. Shows letter plus index number*/
}

for (let property in obj) {
    console.log(property +': ' + obj[property]);
}

// you define the letters as a property of an object. Shows letters plus indexnumber!


// function to return the longest array
breakfast = [
    "egg",
    "croissant",
    "coffee",
    "bacon",
    "beans"
];
lunch = [
    "rice",
    "hamburger",
    "potatoes",
    "soda"
];

function longerMenu (breakfast, lunch) {
    if (breakfast.length > lunch.length) {
        return breakfast;
    }
    return lunch
};
console.log(longerMenu(breakfast, lunch));

//crossword checker
function check(space, word) {

    if (space.length !== word.length) {
        
        return false
    }

    for (let i = 0; i < space.length; i++) {
        if (space[i] !== '-' && word[i] !== space[i]) {
        return false
        }
    } 
    return true;
}; 

let space = '-u-z-l-n-'
let word = 'puzzeling'
console.log(check(space, word))