//Install express server
const express = require('express');
const app = express();
var router = express.Router();

//avoid 404 error when navigating to different routes from browser
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);