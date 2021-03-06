// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

const port = 3000;
// Spin up the server
const server = app.listen(port, listening);

// Callback to debug
function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };
// Initialize all route with a callback function
app.get('/all', sendData);
app.post('/add', callBack);
// Callback function to complete GET '/all'
function sendData (req, res) {
  res.send(projectData);
  };
  app.get('/all', function (req, res) {
    res.send(projectData);
  });
// Post Route
function callBack (req, res){
    projectData.push(req.body);
    res.send(true);
};
