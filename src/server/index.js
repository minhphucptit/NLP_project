// Connect dependencies and libraries
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const FormData = require('form-data');
const axios = require('axios');

//Variables
const formdata = new FormData();
formdata.append("key", '33e57533718a876d1adf0ddc96133be8');
// formdata.append("value", process.API_KEY);

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
    formdata.append("txt", req.body.url);
    const response = await axios.post("https://api.meaningcloud.com/sentiment-2.1",formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  
    res.send(response.data); // Send data back to the client
  } catch (error) {
    console.error('Axios Error:', error.message);
    res.status(500).send('Internal Server Error'); // Handle errors
  }
});

// Setup Server
const port = 3000;

// Designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Evaluate NLP app's server listening on port ${port}!`);
});
