//modules are self contained components that contain functions, variables, and other forms of data that are at the other end and consumed. Modules are based on common.js features

module.exports = (function () {
  //module can have functions, fields in it.
  const cart = [];

  const addItem = (item) => {
    cart.push(item);
  };

  const getAll = () => {
    return cart;
  };

  const billAmount = () => {
    let bill = 0.0;
    for (const item of cart) {
      bill += item.price;
    }
    return bill;
  };

  return {
    addItem,
    getAll,
    billAmount,
  };
})(); //IFFE (Immediately invoked Function Expressions)
