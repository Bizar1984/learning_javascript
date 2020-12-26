'use strict';

function binary_search(list, item) {
  let low = 0; //index 0, first item in the array
  let high = list.length - 1;  //last index of any given list
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  
  return null;
}

const my_list = [1, 3, 5, 7, 9, 11, 13, 15];



console.log(my_list.length -1); // 4. Length of the array is five, last index number is four
console.log(my_list[4]); // getting the value of the last index, this is 9

// Mid is (0 + 4) / 2
// Guess = my_list[2] = 5
// imagine we are looking for the value 3 in the array
// Item = 3 and guess = 5, so guess > item
// This returns a new high (high = mid - 1) 
// Mid was (0 + 4) / 2 and becomes (0 + 3) / 2
// Math.floor rounds 1.5 down to 1
// Guess = my_list[1] = 3
// Here the guess === item and it returns Math.floor(0 + 3) / 2
//A Answer = 1
console.log(binary_search(my_list, 13));
