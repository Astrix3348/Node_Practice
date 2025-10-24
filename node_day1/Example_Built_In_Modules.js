//Node js has its own library of modules that developers can consume in their application this includes filesystem, HTTP, os modules along with many more other modules these modules can be imported and consumed in our programs

// const readline = require(`readline`); // readline is a built in module that is used to perform read/write

// const fs = require(`fs`);
// const { stdout } = require("process");
// fs.writeFileSync(`SampleText`, `This is a sample string`, `utf-8`); // this is a sync task where the app shall wait till the writing is complete

// const fileName = `./Example_Classes.js`;
// const contents = fs.readFileSync(fileName, `utf-8`);
// console.log(contents);

//Reading the file in async manner which is a feature of nodejs
// fs.readFile(fileName, `utf-8`, function (err, data) {
//   if (err) {
//     console.log(`Error : ${err.message}`);
//     return;
//   } else {
//     console.log(data);
//   }
// });

//readline creates an interface for std in and std output.
// const r1 = readline.createInterface({
//   input: process.stdin,
//   output: stdout,
// });

// let name = "";
// let address = ``;
// let salary = ``;

// r1.question(`Enter Your name `, function (name) {
//   console.log(`Hello ${name}`);

//   r1.question(`Where do you live: `, function (address) {
//     console.log(`You live in: ${address}`);

//     r1.question(`Enter your salary: `, function (salary) {
//       console.log(`Your salary is: ${salary}`);

//       r1.close();
//     });
//   });
// });

//////Os Module//////
const os = require(`os`);

console.log(os.platform());
console.log(`total memory is: ` + os.totalmem());
console.log(`available memoery is : ` + os.freemem());
console.log(`total CPUS: ` + os.cpus().length);

const cpus = os.cpus();
for (const cpu of cpus) {
  console.log(cpu.speed);
  console.log(cpu.model);
  console.log(JSON.stringify(cpu));
}

console.log(
  `Total memory in GB would be: ` + os.totalmem() / (1024 * 1024 * 1024)
);
