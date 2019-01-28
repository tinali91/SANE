// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");
// *****************************************************************
// Authentication database routes:
// *****************************************************************

// Requiring our custom middleware for checking if a user is logged in

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", function (req, res) {
    console.log("hit / page")
    res.render("index");
  })

  app.get("/signup", function (req, res) {
    console.log("hit /sigup page");
    // If the user already has an account send them to the provider page
    if (req.user) {
      res.redirect("/provider");
    }
    res.render("signup");
  });

  app.get("/login", function (req, res) {
    console.log("hit /login page");
    // If the user already has an account send them to the provider page
    if (req.user) {
      res.redirect("/provider");
    }
    res.render("login");
  });
  console.log("hit /provider page");

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/provider",
    // isAuthenticated, 
    function (req, res) {
      console.log("signed in");
      db.Site.findAll({
        attributes: [
          "facility",
          "county",
          "city",
          "zip",
          "phone_1",
          "phone_2",
          "website",
          "additional_info"
        ]
      }).then(function(dbSiteResults) {
        res.render("provider", {sites: dbSiteResults});
        console.log(dbSiteResults);
      });
    });

  app.get("/update",
    // isAuthenticated, 
    function (req, res) {
      console.log("hit /update page")
      res.render("update");
    })

  app.get("/create",
    // isAuthenticated, 
    function (req, res) {
      console.log("hit /create page")
      res.render("create");
    })

  // Route for logging user out
  app.get("/logout", function (req, res) {
    console.log("hit /logout page");
    req.logout();
    res.redirect("/");
  });

  // Route for user user out
  app.get("/sane_results", function (req, res) {
    console.log("hit /sane_results page");
<<<<<<< HEAD
    res.render("sane_results", );
=======
    // res.render("sane_results");
    db.Site.findAll({
      attributes: [
        "facility",
        "county",
        "city",
        "zip",
        "phone_1",
        "phone_2",
        "website",
        "additional_info"
      ]
    }).then(function(dbSiteResults) {
      res.render("sane_results", {sites: dbSiteResults});
      console.log(dbSiteResults);
    })
>>>>>>> d6f0211f340de06293ee41e5bea4ccd5e1d10734
  });
};
// *******************************************************
// END authentication routes ^^^^^^
// *******************************************************

