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