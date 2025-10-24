console.log("Testing...");

console.log(Math.sqrt(25));

const data = [22, 45, 87, 65, 43];
console.log(data);

for (const check in data) {
  console.log(`check: ${check}, value: ${data[check]}`);
}

console.log(JSON.stringify(data));
