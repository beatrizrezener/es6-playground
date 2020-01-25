/* 
Create a function sum() that will sum all arguments passed to it.
Quantity of the arguments is unknown.
*/

function sum (...values) {
    let sum = 0;
    sum = values.reduce((acc, elem) => acc + elem, 0);
    console.log(sum);
}
  
export default sum;

sum(1, 3);
sum(10, 20, 5);
sum(2, 9, 35, 60, 8);