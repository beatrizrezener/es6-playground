import * as functions from './examples/functions';
import sum, { sub } from './examples/functions';

console.log(sum(1, 2));
console.log(sub(3, 2));

console.log(functions.default(1,2));
console.log(functions.prod(1,2));