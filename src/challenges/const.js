/* 
    1. Why no error is generated after line 8?
    2. Why TypeError is generated after line 12?
*/

const arr = [1, 2];

arr.push(3);

console.log(arr); // [1, 2, 3]

arr = [1, 2, 3, 4];

console.log(arr); // [1, 2, 3, 4]


/* 
    1. Because array is a Reference type, 
        if we have a const array, the pointer will keep pointing 
        to the same array, the position will not change, 
        but the array values can be changed.
        So, even arr is an array, I can push or remove items.

        Good pratice: 
            - We should not declare const arrays,
            since it can have its content changed;
            - Declare Const to primitive values like string, number or boolean;
            - For array and objects use var or let.

    2. It is not possible reassign value for a const

    We can change const to var or let to avoid error (obs.: let is block scoped).
*/