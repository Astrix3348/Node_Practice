//http is a module provided by node js for performing http related operations in your application. Http operations include GET PUT POST and DELETE

const http = require(`http`);

const portNo = 8888;

function processRequest(req, res) {
  console.log(`request received : ${req.url}`);
  switch (req.url) {
    case `/Employees`:
      res.end(`<h1>This is Employee Management</h1>`);
      break;
    case `/Customer`:
      res.end(`<h1>This is Customer Management</h1>`);
      break;
    case `/Products`:
      res.end(`<h1>This is Product Management</h1>`);
      break;
    default:
      res.end(`OOPS Page not found!!`);
  }
}

http
  .createServer((req, res) => {
    console.log(`server available at: ` + portNo);
    processRequest(req, res);
  })
  .listen(portNo);
