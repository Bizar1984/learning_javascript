// removing the last letter from a string
const someString = "removeLastLetterForMe";
const sliceString = someString.slice(0, -1);
console.log(sliceString);

// how to split a number
const splitThisNumber = 13462.789;
const numberToString = splitThisNumber.toString();
const partInteger = parseFloat(numberToString.split('.')[0]);
// split everything BEFORE the dot
console.log(partInteger);

// local and global variable example
let variableObject = 1; // global variable object
(function() {
    let variableObject = 2; // local variable object
    console.log(variableObject);
})();

variableObject == 1; // global VO, unchanged by the local VO;
console.log(variableObject);

// join method, this returns a STRING
let fruits = ["Banana", "Orange", "Mango"];
let healthyFruitsString = fruits.join(', ');
// console.log(healthyFruitsString);

// comparing a string to multiple values
let games = 'boardGames';

function playItNow() {
    console.log("Alright, let's play some!")
}
// we want to know if this string is equal to some values
if (games == 'boardGames' || games == 'computerGames') {
    playItNow();
}


function goOutandBuy() {
    console.log("This game we don't have")
}

// the below function executes when the items in an array are NOT existing in the games array
// if just one of the items to check exist in the array the function won't get executed
if (['outsideGames', 'otherGames'].indexOf(games) < 0) {
    goOutandBuy();
}

function playItNowReg(a, b) {
    console.log(a * b);
}

// same thing with regular expression. It has to be EXACTLY matched
if (games.match(/^(boardGames)$/)) {
    playItNowReg(2, 6);
} else {
    console.log("Regular expression not matched")

}

// use for OF, never for in, for in is OLD
// one example you can do with for of, iterate over key value pairs of an object 
const dims = {width: 300, height: 150};
for (const [key, value] of Object.entries(dims)) {
    console.log(key, value);
  }

// destructuring
const {width, height} = dims;
console.log({width, height});

// destructuring an array
const position = [100, 200, -15];
const [x, y, z] = position;
console.log([x, y, z]);

const copiedPositionArray = [...position];
copiedPositionArray.push(860); // [100, 200, -15, 4] 
console.log(copiedPositionArray); 
// [100, 200, -15] position is UNAFFECTED

// use template literals
const r = 192;
const g = 255;
const b = 64;
const rgbCSSColor = `rgb(${r},${g},${b})`;
// console.log(rgbCSSColor);

// or like this
const color = [255, 255, 200, 0.5];
const rgbCSSColor2 = `rgba(${color.join(',')})`;
console.log(rgbCSSColor2);
// returns a string, ready for CSS

// moving through an array backwards
backwardsArray = [
    2,
    8,
    10,
    4
]
for(var i = backwardsArray.length - 1; i >= 0; i -= 1) {
    // console.log(backwardsArray[i]);
}

// clamp
function clamp(value, min, max) {
    if (value < min) return min;
    if (value > max) return max;
    return value;
}
// console.log(clamp(60, 40, 80));

function clampRefined(value, min, max) {
     // make sure the value isn't less than min
    var value = Math.max(value, min);
    // make sure the value isn't greater than max
    return Math.min(value, max);
}

console.log(clampRefined(60, 70, 80));

// normalization
// (value - min) / (max - min);
function norm(value, min, max) {
    return (value - min) / (max - min);
}

// console.log(norm(60, 10, 110));

// linear interpolation
function lerp(norm, min, max) {
    return (max - min) * norm + min;
}

// map normalize to lerp
function map(value, sourceMin, sourceMax, destMin, destMax) {
    let n = norm(value, sourceMin, sourceMax);
    return lerp(n, destMin, destMax);
}

// pythagoras
function distance(p0, p1) {
    let dx = p1.x - p0.x,
        dy = p1.y - p0.y;
    return Math.sqrt(dx * dx + dy * dy)
}

function distanceXY(x0, y0, x1, y1) {
    let dx = x1 - x0,
        dy = y1 - y0;
    return Math.sqrt(dx * dx + dy * dy)
}

// a better random
function randomRange(min, max) {
    return min + Math.random() * (max - min);
}


// refined rounding
function roundToPlaces(value, places) {
    let mult = Math.pow(10, places);
    return Math.round(value * mult) / mult;
}

console.log(roundToPlaces(Math.PI, 2));
console.log(roundToPlaces(Math.PI, 4));
console.log(roundToPlaces(-0.687414, 3));
console.log(roundToPlaces(123456789, -1));
console.log(roundToPlaces(123456789, -2));
console.log(roundToPlaces(123456789, -3));












