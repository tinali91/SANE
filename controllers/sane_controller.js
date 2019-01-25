// var router = express.Router();

// var router = express.Router();

// var db = require("../models");

// router.get("/", function(req, res) {
//     // sane.all(function(data){
//         console.log("hit / page")
//         res.render("index", );
//     // })
// })

// router.get("/login", function(req, res) {
//     // sane.all(function(data){
//         console.log("hit /login page")
//         res.render("login", );
//     // })
// })

// router.get("/provider", function(req, res) {
//     // sane.all(function(data){
//         console.log("hit /provider page")
//         res.render("provider", );
//     // })
// })

// router.get("/update", function(req, res) {
//     // sane.all(function(data){
//         console.log("hit /update page")
//         res.render("update", );
//     // })
// })

// router.get("/create", function(req, res) {
//     // sane.all(function(data){
//         console.log("hit /create page")
//         res.render("create", );
//     // })
// })

// router.get("/register", function(req, res) {
//     console.log("hit /register page")
//     res.render("register", );
// })

// // test route
// router.get('/api/register', function(req, res) {
//     console.log("hit /api/register");
//     res.json({ message: 'welcome to our uploaded api' });
// });

// router.post("/api/register", function(req, res) {
//     console.log(req.body);
//     db.register.create({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       password: req.body.password,
//     })
//       .then(function(register) {
//         res.json(register);
//       });
//   });

// router.get("/api/user/:email", function(req, res) {
//     db.User.findOne({
//         where: {
//           email: req.params.email
//         }
//     }).then(function(user) {
//         res.json(user);
//     })
//     console.log("hit /api/user/:email page");
// });

// router.get("/api/users/all", function(req, res) {
//     db.User.findAll(

//     ).then(function(user) {
//         res.json(user);
//         console.log("hit /api/users/all page")
//     })
// })

// router.post("/api/register", function(req,res) {
//     var register = req.body;
//     console.log("in post for sane_controller");
//     res.send(register);
// });

// router.post("/api/user", function(req,res) {
//     if (!req.body) {
//         return;
//     }

//     var user = req.body;
    
//     user = req.body.name;

//     res.send(user);
// });

// //route to handle user registration
// // router.post('/register',login.register);
// // router.post('/login',login.login)
// // app.use('/api', router);

// module.exports = router;