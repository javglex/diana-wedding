//Install express server
const express = require('express');
const app = express();
var router = express.Router();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));


// Home page route.
router.get('*', function (req, res) {
  res.redirect('index.html');
})

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);