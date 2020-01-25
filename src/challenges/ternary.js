/*
    Rewrite the function using ternary operator
*/

function isNumber(arg) {
    if (typeof(arg) === "number") {
        return "That's a number";
    } else {
        return "That's not a number";
    }
}

console.log(isNumber(1));
console.log(isNumber("a"));
console.log(isNumber(false));

/*
function isNumber(arg) {
    return typeof(arg) === "number" ? "That's a number" : "That's not a number";
}
*/