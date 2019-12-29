"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    }
  }], [{
    key: "sum",
    value: function sum(a, b) {
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
