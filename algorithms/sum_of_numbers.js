function oddSum(n) {
    /**Complete the code below to return the sum of
    all the odd numbers from 1 to n, inclusive. **/
    var sumSoFar = 0; //Keep track of the sum so far
    
    var currentNumber = 1;
    while (currentNumber<=n) {

        /**Check if the number is odd and update
            the variable sumSoFar appropriately.**/
        if(currentNumber % 2 == 1 ){    // all odd numbers divided by two have 1 as a remainder
            sumSoFar += currentNumber;
        }
        currentNumber += 1;
    }
    return sumSoFar;
}

//This is just for you to see what happens when the function is called
console.log(oddSum(7));

function evenSum(n) {
    /**Complete the code below to return the sum of
    all the odd numbers from 1 to n, inclusive. **/
    var sumSoFar = 0; //Keep track of the sum so far
    
    var currentNumber = 1;
    while (currentNumber<=n) {

        /**Check if the number is odd and update
            the variable sumSoFar appropriately.**/
        if(currentNumber % 2 == 0 ){    // all odd numbers divided by two have 1 as a remainder
            sumSoFar += currentNumber;
        }
        currentNumber += 1;
    }
    return sumSoFar;
}

//This is just for you to see what happens when the function is called
console.log(evenSum(4));


