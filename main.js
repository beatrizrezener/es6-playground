class ItemList {
  constructor() {
    this.items = [];
  }

  addItem() {
    this.items.push('New item');
    console.log(this.items);
  }  

  static sum(a, b) {
    return a + b;
  }
}

const myItemList = new ItemList();

document.getElementById('btn').onclick = function() {
  myItemList.addItem();
}

console.log(ItemList.sum(1,4));