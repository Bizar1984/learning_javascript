var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;

  };
};



// function to remove odd numbers from the array
function removeOdd(arr, invert = false) {   // what the hell does this mean?
    for (let i = 0; i < arr.length; ++i) {
        const odd = arr[i] % 2 === 1
        if (odd ^ invert) {   // caret symbol
            arr.splice(i--, 1)
        }
    }
};

const arr = fibonacci_series(33);
// removeOdd(arr);
console.log(arr); // this works surprisingly

// now adding the items
var sum = arr.reduce(function(a, b) {
    return a + b;
}, 0);

console.log(sum); // end of the second exercise
