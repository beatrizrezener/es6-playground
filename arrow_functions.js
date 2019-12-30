const arr = [1, 2, 3, 4, 5];
// const map = arr.map(function(item) {
//   return item + 10;
// });
const map = arr.map(item => item + 10);
console.log(map);

const user = { name: 'Mariah', age: 26 };
// function showAge(user) {
//   return user.age;
// }
const showAge = (user) => user.age;
console.log(showAge(user));

const name = "Mariah";
const age = 26;
// function showUser(name = 'Mariah', age = 21) {
//   return { name, age };
// }
const showUser = (name = 'Mariah', age = 21) => ({ name, age });
console.log(showUser(name, age));
console.log(showUser(name));

// const promise = function() {
//   return new Promise(function(resolve, reject) {
//     return resolve();
//   }); 
// }
const promise = () => new Promise( (resolve, reject) => resolve());
console.log(promise());

