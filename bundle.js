"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// classes 
var ItemList =
/*#__PURE__*/
function () {
  function ItemList() {
    _classCallCheck(this, ItemList);

    this.items = [];
  }

  _createClass(ItemList, [{
    key: "addItem",
    value: function addItem() {
      this.items.push('New item');
      console.log(this.items);
    } // default values

  }], [{
    key: "sum",
    value: function sum() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      return a + b;
    }
  }]);

  return ItemList;
}();

var myItemList = new ItemList();

document.getElementById('btn').onclick = function () {
  myItemList.addItem();
};

console.log(ItemList.sum(1, 4));
console.log(ItemList.sum(8)); // array operations

var arr = [1, 1, 2, 3, 5, 8, 13];
var map = arr.map(function (item) {
  return item + 1;
});
console.log(map);
var mapWithIndex = arr.map(function (item, index) {
  return item + index;
});
console.log(mapWithIndex);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 3;
});
console.log(find); // arrow function

var newMap = arr.map(function (item) {
  return item + 2;
});
console.log(newMap);

var arrowFunction = function arrowFunction() {
  return 'arrowFunction';
};

console.log(arrowFunction());

var arrowFunctionReturningObject = function arrowFunctionReturningObject() {
  return {
    name: 'Mariah'
  };
};

console.log(arrowFunctionReturningObject()); // destructing

var user = {
  name: 'Mariah',
  age: '45',
  address: {
    city: 'Brasilia',
    state: 'DF'
  }
};
var name = user.name,
    age = user.age,
    city = user.address.city;
console.log(name);
console.log(age);
console.log(city);

function showName(_ref) {
  var name = _ref.name,
      age = _ref.age;
  console.log(name, age);
}

showName(user);
