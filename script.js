// var item1 = {
//   name: 'banana',
//   pricePer: 0.6,
//   quantity: 5,
//   tax: 0.06,
//   totalPrice: function() {
//   return (this.pricePer * this.quantity) + (this.pricePer * this.quantity * this.tax);
// },
// };
// var item2 = {
//   name: 'chicken',
//   pricePer: 1,
//   quantity: 6,
//   tax: 0.06,
//   totalPrice: function() {
//   return (this.pricePer * this.quantity) + (this.pricePer * this.quantity * this.tax);
// },
// };
// var item3 = {
//   name: 'milk',
//   pricePer: 2.09,
//   quantity: 1,
//   tax: 0.06,
//   totalPrice: function() {
//   return (this.pricePer * this.quantity) + (this.pricePer * this.quantity * this.tax);
// },
// };
// var item4 = {
//   name: 'chips',
//   pricePer: 3.99,
//   quantity: 1,
//   tax: 0.06,
//   totalPrice: function() {
//   return (this.pricePer * this.quantity) + (this.pricePer * this.quantity * this.tax);
// },
// };
// var item5 = {
//   name: 'pizza',
//   pricePer: 5.99,
//   quantity: 1,
//   tax: 0.06,
//   totalPrice: function() {
//   return (this.pricePer * this.quantity) + (this.pricePer * this.quantity * this.tax);
// },
// };
// var item6 = {
//   name: 'bellPeppers',
//   pricePer: 3,
//   quantity: 0.79,
//   tax: 0.06,
//   totalPrice: function() {
//   return (this.pricePer * this.quantity) + (this.pricePer * this.quantity * this.tax);
// },
// };
function item(name, pricePer, qty, tax, totalPrice) {
  // debugger;
  this.name = name;
  this.pricePer = pricePer;
  this.qty = qty;
  tax = (pricePer * qty * 0.06);
  this.tax = tax;
  this.totalPrice = ((pricePer * qty) + tax);
};

var item1 = new item('Banana', 0.6, 5);
var item2 = new item('Chicken', 1, 6);
var item3 = new item('Milk', 2.09, 1);
var item4 = new item('Chips', 3.99, 1);
var item5 = new item('Pizza', 5.99, 1);
var item6 = new item('Bell Pepper', 0.79, 3);

var groceryList = [item1, item2, item3, item4, item5, item6];


function addItem(newItem, newPrice, newQty){
  // debugger;
  var addedItem = 'item' + ((groceryList.length + 1).toString());
  addedItem = new item(newItem, newPrice, newQty);
  groceryList.push(addedItem);
  // console.log(addedItem);
  // console.log(groceryList);
}
addItem('Hot Sauce', 1.50, 1);
addItem('Pudding', 2.99, 1);


var addUp = -1;
var rmv = 'Chips';
function removeItem(x){
  addUp += 1;
  // debugger;
  if (x.name === rmv){
    groceryList.splice(addUp,1);
    // console.log(groceryList);
  }
}
groceryList.forEach(removeItem);


var space = "                ";
var sum = 0;
for (var i = 0; i < groceryList.length; i++) {
  var obj = groceryList[i];
  console.log('Item'+ (i+1) + ':  ' + obj.name + (space.substring(0,(space.length-obj.name.length))) + ' qty: ' + obj.qty + '    before tax: $' + (obj.pricePer*obj.qty).toFixed(2) + '     tax: $' + obj.tax.toFixed(2) + '     total price: $' + obj.totalPrice.toFixed(2));
  sum += obj.totalPrice;
}

console.log(space + space + space + space + '        Grand Total: $' + sum.toFixed(2));
