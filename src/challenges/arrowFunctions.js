/*
    User arrow functions instead of functions
*/

function mult(a, b) {
    return a * b;
}

setTimeout(function (){
    console.log(mult(2, 10));
}, 1000);


// const mult = (a, b) => a * b ;

// setTimeout(() => console.log(mult(2, 10)), 1000);