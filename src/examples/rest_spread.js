// REST 
const arr = [1, 2, 3, 4, 5, 6]
const [ x, ...y] = arr;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

function sum(...numArr) {
  return numArr.reduce((total, next) => total + next);
}

console.log(sum(1, 2, 3, 4, 5, 6)); // 21
console.log(sum(1, 2)); // 3

// SPREAD
const user = {
  name: 'Mariah',
  age: 26,
  address: {
    city: 'Brasilia',
    state: 'DF',
    country: 'Brasil',
  } 
};

console.log(user);
console.log({...user, name: 'John'});
console.log({...user, address: { ...user.address, city: 'Sobradinho' }});