var express = require("express");
// var login = require("./routes/loginRoutes");
var PORT = process.env.PORT || 8081;
var path = require("path");
// var bodyParser = require("body-parser");


var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false}))
// app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/sane_controller.js");

app.use(routes);

var router = express.Router();

// require("./routes/apiRoutes.js");
// require("./routes/loginRoutes.js");

// test route
// router.get('/api/register', function(req, res) {
//     res.json({ message: 'welcome to our upload module apis' });
// });
//route to handle user registration
// router.post('/register',login.register);
// router.post('/login',login.login)
app.use('/api', router);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
 // Log (server-side) when our server has started
 console.log("Server listening on: http://localhost:" + PORT);
});
