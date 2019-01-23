var express = require( "express");

var router = express.Router();

var sane = require("../models/index.js");

// test route
router.get('/api/register', function(req, res) {
    console.log("hit /api/register page");
    res.json({ message: 'welcome to our uploaded api' });
});

router.get("/api/user", function(req, res) {
    console.log("hit /api/user page");
    res.json({message: "new user to api/user"});
})

router.get("/", function(req, res) {
    // sane.all(function(data){
        console.log("hit / page")
        res.render("index", );
    // })
})

router.get("/login", function(req, res) {
    // sane.all(function(data){
        console.log("hit /login page")
        res.render("login", );
    // })
})

router.get("/provider", function(req, res) {
    // sane.all(function(data){
        console.log("hit /provider page")
        res.render("provider", );
    // })
})

router.get("/update", function(req, res) {
    // sane.all(function(data){
        console.log("hit /update page")
        res.render("update", );
    // })
})

router.get("/create", function(req, res) {
    // sane.all(function(data){
        console.log("hit /create page")
        res.render("create", );
    // })
})

//route to handle user registration
// router.post('/register',login.register);
// router.post('/login',login.login)
// app.use('/api', router);

module.exports = router;