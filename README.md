# Google-Books

## Getting Started

Google Books is a web app that lets users search for books by title and save/delete books for future reference. It was built with React, MongoDB, Mongoose, Node, and Express.

![demo](demo/books.gif)

For a demo of the app, visit: <https://________.herokuapp.com>

### Prerequisites

To download and test this app, you will need the Node Packet Manager installed.  For more information, visit: <https://www.npmjs.com/get-npm>

You will also need Node.js installed.  For more information, visit <https://nodejs.org/en/download/>

### Installing

To install, access the Github page <https://github.com/digipet007/nyt-scraper>.  You may fork the repository and then clone it to your computer.  

Next, you will need to download the required NPM packages.  The required NPM packages include:
```
"axios": "^0.18.1",
"express": "^4.16.3",
"if-env": "^1.0.4",
"mongoose": "^5.3.16"
```
Because these packages are listed as dependencies already in the package.json file, you may install these packages by typing `npm install` on the commandline.

You will also need MongoDB installed for your database <https://www.mongodb.com/download-center>

Your app should now be ready for testing and then deployment.

Then, To use this app on your local device, run the backend with the following command on the command line:
```
node server.js
```
OR, run the frontend with the following command on the command line:
```
npm start
```


Then go to the following URL in your browser: `localhost:3000`
You should be able to search for new books and add them to your database

## Deployment and General Use
This app can be deployed to a server, such as Heroku or AWS, for online use from different users in different locations. To store data input, you will need to utilize an online database, such as the `mLab Mongo` add-on offered by Heroku.

## Built With

* Javascript
* React
* Bootstrap Framework
* MongoDB

## Author

* **Sarah Arnold** --view my portfolio and bio: <https://digipet007.github.io/Sarahs-Portfolio/>