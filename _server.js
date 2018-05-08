'use strict';
//Install express server
const express = require('express');
const path = require('path');
const app = express();

//avoid 404 error when navigating to different routes from browser
// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));

// For all GET requests, send back index.html so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});


console.log("listening...");
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);