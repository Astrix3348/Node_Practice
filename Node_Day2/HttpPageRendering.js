// We need HTTP for web server dev, FS for file handling, BODY-PARSER for processing POST handling

const http = require(`http`);
const fs = require(`fs`);
const parse = require(`url`).parse; //HTTP-GET Processing
const qs = require(`querystring`); //HTTP-POST

const pno = 8888;
const root = __dirname; //Gets the root directory of the application, __dirname is an inBuilt variable

function renderPage(fileName, res) {
  const file = root + fileName; //concatenating the filename with the root directory path
  fs.createReadStream(file).pipe(res); // reads the file, puts into fileStream object and sends it to response using a method pipe. pipe is a method used to process the stram to the destination(response).
}

//Function that is called for POST Operation..
function handlePost(req, res) {
  let inputs = ``;
  //when form is posted it comes with 2 events, data and end. data is for handling post and end is to close the processing of the page.
  req.on(`data`, (result) => {
    inputs = result.toString();
    console.log(inputs);
  });

  req.on(`end`, () => {
    // now that the post request is completed we can now process the posted data
    console.log("Now the processing the inputs received");
    const data = qs.parse(inputs);
    const msg = `<h1>Registration sucessful</h1><p>Welcome Mr. ${data.txtName}</p>You will be contacted again for other details via you email which is ${data.txtEmail}`;
    res.end(msg);
    return;
  });
}

function processRequest(req, res) {
  if (req.method == `POST`) {
    handlePost(req, res);
    return;
  }
  const inputs = parse(req.url, true).query;
  if (inputs.name != undefined) {
    const msg = `<h1>Registration sucessful</h1><hr/><p>Welcome Mr. ${data.txtName}</p>You will be contacted again for other details via you email which is ${data.txtEmail}`;
    res.end(msg);
  }
  switch (req.url) {
    case "/Registration":
      renderPage(`/RegistrationPage.html`, res);
      break;
    default:
      renderPage(`/ErrorPage.html`, res);
  }
}

http
  .createServer((req, res) => {
    processRequest(req, res);
  })
  .listen(pno);
