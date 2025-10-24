//3 ways to create a funtion

//using function keyword
function addFunc(x, y) {
  return x + y;
}
console.log(addFunc(34, 65));

//anonymous functions
const subFunc = function (x, y) {
  return x - y;
};
console.log(subFunc(100, 3));

//Best way to implement a function
const mulFunc = (x, y) => {
  return x * y;
};
console.log(`mulFunc: ` + mulFunc(2, 4));
