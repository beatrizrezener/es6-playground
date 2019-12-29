"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
  lastName: 'Motta',
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

showName(user); // rest operator

var lastName = user.lastName,
    rest = _objectWithoutProperties(user, ["lastName"]);

console.log(lastName);
console.log(rest);
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a);
console.log(b);
console.log(c);

function sumWithRestOperatorParam() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(sumWithRestOperatorParam(1, 2, 3, 4));
var initialValue = 0;

function anotherSumWithRestOperatorParam(a) {
  for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    params[_key2 - 1] = arguments[_key2];
  }

  console.log(params);
  return params.reduce(function (acc, cur) {
    console.log(acc, cur, cur * a);
    return acc + cur * a;
  }, initialValue);
}

console.log(anotherSumWithRestOperatorParam(2, 2, 3, 4));
var data = [{
  country: 'China',
  pop: 1409517397
}, {
  country: 'India',
  pop: 1339180127
}, {
  country: 'USA',
  pop: 324459463
}, {
  country: 'Indonesia',
  pop: 263991379
}];
var totalPop = data.reduce(function (total, next) {
  return next.country === 'China' ? total : total + next.pop;
}, initialValue);
console.log(totalPop); // spread

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);
var user1 = {
  name: 'Mariah',
  age: '28',
  company: 'xpto'
};

var user2 = _objectSpread({}, user1, {
  name: 'John'
});

console.log(user2); // object short syntax

var userName = 'Mariah';
var userAge = 26;
var shortUser = {
  userName: userName,
  userAge: userAge,
  company: 'XPTO'
};
console.log(shortUser); // template literals

console.log("Name: ".concat(userName, ", age: ").concat(userAge));
