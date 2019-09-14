var express = require("express");
var app = express();
var PORT = process.env.PORT || 3001;

//------------ Connecting Express --------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// -------------- Data -------------------
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//-------------- Adding Listener ----------------
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});