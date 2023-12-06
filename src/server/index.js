// Connect dependencies and libraries
const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

//Variables
let projectData = {};

//Setting up the credentials for the api
const requestOptions = {
  method: 'POST',
  body: JSON.stringify({
    key: process.env.API_KEY
  }),
  redirect: 'follow'
};

// Creating an instance of the app
const app = express();

// Configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initializing the production folder
app.use(express.static('dist'));

// Requests
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

app.post("/api", async (req, res) => {
  try {
    const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions);
    const data = await response.json();
    res.send(data); // Send data back to the client
  } catch (error) {
    console.log('error', error);
    res.status(500).send('Internal Server Error'); // Handle errors
  }
});

// Setup Server
const port = 3000;

// Designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Evaluate NLP app's server listening on port ${port}!`);
});
