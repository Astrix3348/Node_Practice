// 3 ways to create classes in js

/////Singleton Objects///////

const emp = {
  id: 1,
  name: "Aakash",
  location: "Delhi",
};

const emp2 = emp;
emp2.location = "Berlin";

console.log(emp.location); //this doesnt change the location for emp2 and emp and emp2 are kind of an aliases hence the location printed for emp is berlin even though we changed the location for emp2

///////Using Function type//////

const empRec = function (id, name, address) {
  this.id = id;
  this.name = name;
  this.address = address;
};

const obj1 = new empRec(1, `aakash`, `delhi`);
const obj2 = new empRec(2, "Gargi", "delhi");

obj1.location = `berlin`;

console.log(obj1);
console.log(JSON.stringify(obj2));

////////using ES6 syntax///////
//Similar to function type but more readable with keyword lass introduced in ES6 version of JS
class Customer {
  constructor(id, name, address) {
    this.id = id;
    this.name = name;
    this.address = address;
  }
}

const temp = new Customer(3, `pranay`, `Delhi`);
console.log(temp);
