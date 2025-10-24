const shoppingCart = require(`./Example_Modules`);

shoppingCart.addItem({ id: 1, name: "iphone 14", price: 70000, quantity: 2 });
shoppingCart.addItem({ id: 2, name: "iphone 15", price: 70000, quantity: 2 });
shoppingCart.addItem({ id: 3, name: "iphone 16", price: 70000, quantity: 2 });
shoppingCart.addItem({ id: 4, name: "iphone 17", price: 70000, quantity: 2 });
shoppingCart.addItem({
  id: 5,
  name: "iphone 17 Pro",
  price: 70000,
  quantity: 2,
});

const bill = shoppingCart.billAmount();
console.log(`the bill amount is ${bill}`);

const items = shoppingCart.getAll();
for (const check of items) {
  console.log(`items are: ${check.name}`);
}
