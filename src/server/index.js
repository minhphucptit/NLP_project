// Connect dependencies and libraries
const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const FormData = require('form-data');

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
  // try {
  //   const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions);
  //   const data = await response.json();
  //   res.send(data); // Send data back to the client
  // } catch (error) {
  //   console.log('error', error);
  //   res.status(500).send('Internal Server Error'); // Handle errors
  // }


  // console.log('req', req.body.url)

  const formdata = new FormData();
  formdata.append("key", '33e57533718a876d1adf0ddc96133be8');
  formdata.append("txt", req.body.url);
  // formdata.append("lang", "TEXT LANGUAGE HERE");

  const response = await axios.request({
    url: "https://api.meaningcloud.com/sentiment-2.1",
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    data: formdata
  });

  res.send(response.data)
});

// Setup Server
const port = 3000;

// Designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Evaluate NLP app's server listening on port ${port}!`);
});
