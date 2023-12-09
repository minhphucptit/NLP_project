# Minh Phuc
# Evaluate a News Article with NLP

A web tool/interface that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites by interacting with the NLP system of an exciting new api called (https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/response)

## Getting started

The starter project can be downloaded from [here](https://github.com/udacity/fend/tree/refresh-2019/projects/evaluate-news-nlp)

The project will be evaluated by a Udacity code reviewer according to the Evaluate News with NLP project [rubric](https://review.udacity.com/#!/rubrics/2668/view)

### Tools Required:

You would require the following tools to develop and run the project:

* [node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* A text-editor of your choice. 

### Installation

* Start by setting up the project environment. `cd` into the project's root folder and run the following command to install packages mentioned in `package.json`:

  ```
  npm install
  ```

## Development

### Setting up the API
Update The meaningcloud API key
```

...but there's a problem with this. We are about to put our personal API keys into a file, but when we push, this file is going to be available PUBLICLY on Github. Private keys, visible publicly are never a good thing. So, we have to figure out a way to make that not happen. The way we will do that is with environment variables. Environment variables are pretty much like normal variables in that they have a name and hold a value, but these variables only belong to your system and won't be visible when you push to a different environment like Github.

- [ ] Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
  ```
  API_ID=**************************
  API_KEY=**************************
  ```
- [ ] Add this code to the very top of your server/index.js file:
  ```
  const dotenv = require('dotenv');
  dotenv.config();
  ```
- [ ] Reference variables you created in the .env file by putting ```process.env``` in front of it, an example might look like this:
  ```
  console.log(`Your API key is ${process.env.API_KEY}`);
  ```
...Not that you would want to do that. This means that our updated API credential settings will look like this:
  ```javascript
  // set aylien API credentials
  // NOTICE that textapi is the name I used, but it is arbitrary. 
  // You could call it aylienapi, nlp, or anything else, 
  //   just make sure to make that change universally!
  var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });
  ```

#### Step 5: Using the API

We're ready to go! The API has a lot of different endpoints you can take a look at [here](https://docs.aylien.com/textapi/endpoints/#api-endpoints). And you can see how using the SDK simplifies the requests we need to make. 

I won't provide further examples here, as it's up to you to create the various requests and make sure your server is set up appropriately.

### After the API Setup

Once you are hooked up to the Aylien API, you are most of the way there! Along with making sure you are following all the requirements in the project rubric in the classroom, here are a few other steps to make sure you take.

- Parse the response body to dynamically fill content on the page.
- Test that the server and form submission work, making sure to also handle error responses if the user input does not match API requirements.
- Go back to the web pack config and add the setup for service workers. 
- Test that the site is now available even when you stop your local server

For details now how these functionalities have been implemented, refer the source code.

## Running the App

1. Open terminal in the root directory
2. Generate the `dist` folder using `npm run build-prod` command on the terminal
4. Aylien API requires you to sign up and get credentials to use their endpoints. After signing up, you will get an `API-KEY` and `API-ID`. Create an `.env` file in the root directory that will contain those two like following: 
    > API_ID=***  
      API_KEY=***

    Just replace the `***` with your credentials
5. To start the express server, run `npm run start` command in the terminal. The server will start on `http://localhost:3000/` in your browser
6. To build the app in development mode, run `npm run build-dev`. command in the terminal. The server will start on `http://localhost:8080/` in your browser which is the default port for webpack dev server
7. The production version can be directly run by opening `dist/index.html` file
8. Use `npm run test` command to test the project with jest

## Deployment

A great step to take with the finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.

## References

* Webpack [Docs](https://webpack.js.org/concepts/)
* Alyien API Endpoint [Docs](https://api.aylien.com/api/v1)
* Jest [Docs](https://jestjs.io/docs/en/getting-started)
* Jest [Tutorial](https://www.valentinog.com/blog/jest/)

