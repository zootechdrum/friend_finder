var path    = require("path");
var express = require("express");

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);