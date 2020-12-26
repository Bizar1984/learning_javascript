// includes method
let goods = [
    'bananas',
    'yoghurt',
    'pangasius'
];


let shoppingList = [
    'bananas',
    'coffee',
    'sixpack',
    'pangasius'
];


// looping over every OTHER element in an array
for(let item of shoppingList){
    console.log(item + ': ' + goods.includes(item));
};

let closingTimes = [
    '6pm',
    '6pm',
    '9pm',
    '6pm',
    '6pm',
    '6pm',
    '6pm'
];

for(let i = 1; i < closingTimes.length; i += 2) {
    closingTimes[i] = 'closed three days in a week';
}

// console.log(closingTimes);

// indexOf method
let highScores = [
    'mystery man',
    'bombadillo',
    'robin',
    'nabbie',
    'vetzak'
];

let myRanking = highScores.indexOf('bombadillo'); // name not found in array returns -1
console.log('Your current rank is: ' + myRanking);

// what else? Reduce, splice, shift, unshift.. you need more practice!

// repace item
let groceriesTwo = [
    'Gumdrops',
    'Bookworms',
    'Nulled Cider'
]

let index = groceriesTwo.indexOf('Bookworms');
groceriesTwo.splice(index, 1, 'Skooma');
console.log(groceriesTwo);

// array with objects
let groceries = [
    {name: 'Grasshopper Gumdrops', price: 4},
    {name: 'Bug Juice', price: 8},
    {name: 'Bookworms', price: 20},
    {name: 'Nulled Cider', price: 23},
    {name: 'Pop() Corn', price: 9.5}
];

let names = groceries.map((item, __) => {
    return item.name;
});

let prices = groceries.map((item, __) => {
    return item.price;

});

let total = prices.reduce((sum, price, __) => {
    return sum + price;
}, 0)

// free shipping on orders above 50
let shipping = total > 50? 0 : 10;
console.log("Items currently in cart: " + names);
console.log("Total cost for your groceries: " + total + shipping);


// reduce method
let arrayReduce = [
    1,
    2,
    3,
    4,
    5
];

let totalTwo = arrayReduce.reduce((
    accumulator, current) => {
        return accumulator + current;
    }, 0);
console.log('The sum of the elements equals: ' + totalTwo);






