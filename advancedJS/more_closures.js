function a(v) {
    const foo = v;

    return function() {
        return foo;
    };
}

const f = a(123);
const g = a(456);
console.log(f());
console.log(g());

// function a creates a new function every time it's called
// the function closes over the variable foo

// one more example to see the inner workings in action
// closeThis creates a new function every time it's called
function closeThis(output) {
    const closeOverMe = output;

    return function() {
        return closeOverMe;
    };
}

const h = closeThis(789);
const i = closeThis("10 and consider it closed!");
console.log(h());
console.log(i());