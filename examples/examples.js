// classes 
class ItemList {
  constructor() {
    this.items = [];
  }

  addItem() {
    this.items.push('New item');
    console.log(this.items);
  }  

  // default values
  static sum(a = 1, b = 2) {
    return a + b;
  }
}

const myItemList = new ItemList();

document.getElementById('btn').onclick = function() {
  myItemList.addItem();
}

console.log(ItemList.sum(1,4));
console.log(ItemList.sum(8));

// array operations
const arr = [1, 1, 2, 3, 5, 8, 13];

const map = arr.map(function(item) {
  return item + 1;
});
console.log(map);

const mapWithIndex = arr.map(function(item, index) {
  return item + index;
});
console.log(mapWithIndex);

const sum = arr.reduce(function(total, next) {
  return total + next;
});
console.log(sum);

const filter = arr.filter(function(item) {
  return item % 2 === 0;
});
console.log(filter);

const find = arr.find(function(item) {
  return item === 3;
});
console.log(find);

// arrow function
const newMap = arr.map(item => item + 2);
console.log(newMap);

const arrowFunction = () => 'arrowFunction';
console.log(arrowFunction());

const arrowFunctionReturningObject = () => ({ name: 'Mariah' });
console.log(arrowFunctionReturningObject());

// destructing
const user = {
  name: 'Mariah',
  lastName: 'Motta',
  age: '45',
  address: {
    city: 'Brasilia',
    state: 'DF',
  }
}

const { name, age, address: { city } } = user;
console.log(name);
console.log(age);
console.log(city);

function showName({ name, age }) {
  console.log(name, age);
}
showName(user);

// rest operator
const { lastName, ...rest } = user;
console.log(lastName);
console.log(rest);

const [ a, b, ...c ] = arr;
console.log(a);
console.log(b);
console.log(c);

function sumWithRestOperatorParam(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(sumWithRestOperatorParam(1, 2, 3, 4));

const initialValue = 0;
function anotherSumWithRestOperatorParam(a, ...params) {
  console.log(params);
  return params.reduce((acc, cur) => { 

    console.log(acc, cur, cur * a);
    return acc + cur * a
  }, initialValue);
}
console.log(anotherSumWithRestOperatorParam(2, 2, 3, 4));

let data = [
  {
    country: 'China',
    pop: 1409517397,
  },
  {
    country: 'India',
    pop: 1339180127,
  },
  {
    country: 'USA',
    pop: 324459463,
  },
  {
    country: 'Indonesia',
    pop: 263991379,
  }
]

const totalPop = data.reduce((total, next) => {
  return next.country === 'China' ? total : total + next.pop;
}, initialValue);

console.log(totalPop);

// spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]
console.log(arr3);

const user1 = {
  name: 'Mariah',
  age: '28',
  company: 'xpto',
}

const user2 = { ...user1, name: 'John' }
console.log(user2);

// object short syntax
const userName = 'Mariah';
const userAge = 26;
const shortUser = {
  userName,
  userAge,
  company: 'XPTO'
}
console.log(shortUser);

// template literals
console.log(`Name: ${userName}, age: ${userAge}`);