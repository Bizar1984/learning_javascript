function longDivision(n, d) {
    var num = n + "",
        // for example 256 divided by 16.. in this case n = 256
        numLength = num.length,
        // numLength of 100 = 3. The type for now is string
        remainder = 0,
        answer = '',
        // answer is initially undefined, later the type is changed to float with the parseFloat function
        i = 0;

    while (i < numLength + 3) {
        // dont go further than 3 decimals

        if (i < numLength) {
            var digit = parseInt(num[i])
            // Imagine n = 256
            // this logs 2, 5, 6 and the type is converted from string to number

        } else(digit = 0)
        // third run i = 2; imagine n = 9, i > numLength so digit = 0;

        if (i == numLength) {
            answer = answer + ".";
            // second run i = 1, imagine n is 9. Here i == numLength and we add a dot!
            // later this is parsed.. parseInt(3.) for example removes the . and returns 3;
        }

        answer = answer + Math.floor((digit + (remainder * 10)) / d);
        console.log(digit);
        remainder = (digit + (remainder * 10)) % d;
        i++;
    }
    return parseFloat(answer);

}

console.log(longDivision(256, 16));
// dividing by 0 gives you Infinity. Try it!
