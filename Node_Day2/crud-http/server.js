const http = require(`http`); //HTTP handling
const fs = require(`fs`); //File reading and writing
const qs = require(`querystring`); // For parsing posted DATA

const dataFile = __dirname + `/data.json`; //location of the json file

//function to convert json data from the file into an array of objects
function readData() {
  const contents = fs.readFileSync(dataFile, `utf-8`);
  let jsonObjects = JSON.parse(contents);
  console.log(jsonObjects);
  return jsonObjects;
}

//Write to the json file
function writeDATA(data) {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2)); // we write null because of any delimiter ex comma or anything and we wrote 2 so as to add any indentation
}

function serveFiles(res, filePath, contentType = `text/html`) {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end("internal server error");
      return;
    }
    res.writeHead(200, { "content-Type": contentType });
    res.end(content);
  });
}

function handlePost(req, res, callBack) {
  let body = "";
  req.on("data", (input) => {
    body += input;
  });
  req.on("end", () => {
    const parsedData = qs.parse(body);
    callBack(parsedData);
    res.writeHead(302, { Location: "/" });
    res.end();
  });
}
http
  .createServer((req, res) => {
    if (req.method == "POST") {
      if (req.url == "/api/create") {
        handlePost(req, res, (data) => {
          const json = readData(); //get current records from the json file
          json.push({
            // create an object with id, name, address
            id: parseInt(data.id),
            name: data.name,
            address: data.address, //add the new record
          });
          writeDATA(json); //write back to the file
        });
      } else if (req.url == "/api/update") {
        handlePost(req, res, (data) => {
          const json = readData();
          const item = json.find((d) => d.id === parseInt(data.id));
          if (item) {
            item.name = data.name;
            item.address = data.address;
            writeDATA(json);
          }
        });
      } else if (req.url == "/api/delete") {
        handlePost(req, res, (data) => {
          const json = readData().filter((d) => d.id != parseInt(data.id));
          writeDATA(json);
        });
      } else {
        res.writeHead(404);
        res.end("<h1>Not Found</h1>");
      }
    } else if (req.method == "GET") {
      if (req.url == "/") return serveFiles(res, "./views/index.html");
      if (req.url == "/add") return serveFiles(res, "./views/add.html");
      if (req.url == "/delete") return serveFiles(res, "./views/delete.html");
      if (req.url == "/update") return serveFiles(res, "./views/update.html");
      if (req.url == "/api/read") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(readData()));
      } else {
        res.writeHead(404);
        res.end("<h1>File Not Found!</h1>");
      }
    }
  })
  .listen(1234);
