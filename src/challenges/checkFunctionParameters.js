/*
    Check presence of the function parameters
*/

function missingArg() {
    throw new Error("Uncaught Error: Function square requires an argument!");
}

function square(a = missingArg()) {
    console.log(a * a);
}

square(10);
square(); // Must return Unaught Error: Function square requires an argument!