const company = {
  name: 'Google',
  address: {
    city: 'BH',
    state: 'MG',
  }
};

const { name, address: {city, state} } = company;

console.log(name);
console.log(city);
console.log(state);


// function showUser(user) {
//   return `${user.name}, ${user.age} years old.`;
// }

function showUser({ name, age }) {
  return `${name}, ${age} years old.`;
}

console.log(showUser({ name: 'Mariah', age: 26 }));