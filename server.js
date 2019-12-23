var path    = require("path");
var express = require("express");

var app = express()
var PORT = 3000;

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Loads up our static files 
app.use('/', express.static(path.join(__dirname, 'public')))

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//Set up listener on designated port

app.listen(PORT, function() {
    console.log("App is listening to port " + PORT);
})