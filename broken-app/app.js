const express = require('express');
const app = express();
// var app = express();

// let axios = require('axios');
const handleRequest = require('./handleRequest') // route middleware

const morgan = require('morgan') // Morgan for error handling
app.use(morgan('dev'))

app.use(express.json());
app.use('/', handleRequest);

// general error handler
app.use(function(err, req, res, next) {
  console.log(err);
  res.status(500).send('Internal Server Error');
})

// start server 
app.listen(3000, function() {
  console.log('App running on port 3000');
});

module.exports = app;
