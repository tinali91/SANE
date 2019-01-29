var path = require("path");
var db = require("../models");
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

// *****************************************************************
// Authentication database routes:
// *****************************************************************
  // Here we've add our isAuthenticated middleware to this route.
  app.get("/provider",
    // isAuthenticated, 
    function (req, res) {
      console.log("signed in");
      db.Site.findAll({
        attributes: [
          "id",
          "facility",
          "county",
          "city",
          "address",
          "zip",
          "phone_1",
          "phone_2",
          "website",
          "additional_info"
        ]
      }).then(function(dbSiteResults) {
        res.render("provider", {sites: dbSiteResults});
        // console.log(dbSiteResults);
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
// *******************************************************
// END authentication routes ^^^^^^
// *******************************************************

  // Route for logging user out
  app.get("/logout", function (req, res) {
    console.log("hit /logout page");
    req.logout();
    res.redirect("/");
  });

  // Route for sane user 
  app.get("/sane_results", function (req, res) {
    console.log("hit /sane_results page");
    // res.render("sane_results");
    db.Site.findAll({
      attributes: [
        "id",
        "facility",
        "county",
        "city",
        "address",
        "zip",
        "phone_1",
        "phone_2",
        "website",
        "additional_info"
      ]
    }).then(function(dbSiteResults) {
      res.render("sane_results", {sites: dbSiteResults});
      // console.log(dbSiteResults);
    })
  });
};


