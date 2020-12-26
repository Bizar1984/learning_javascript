//find the maximum value
function findMax() {
    var i;
    var max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i]
    }
}
    return max;
}
console.log(findMax(1, 123, 36600, 115, 34, 67));