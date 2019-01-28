var db = require("../models");
var passport = require("../config/passport");

//************set up for signup and providers********
module.exports = function (app) {

  app.get("/api/user_data/all", function (req, res) {
    console.log("hit /api/user_data/all page")
    db.User.findAll({

    }).then(function (dbUser) {
      res.json(dbUser);
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    })
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configur Sequelize User Model. If user created successfully, proceed to log the user in, otherwise send err
  app.post("/api/signup", function (req, res) {
    console.log("hit /api/signup page");
    db.User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    }).then(function (dbUser) {
      res.render("login");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    })
  });

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the provider page otherwise sent err
  app.post('/api/login',
    passport.authenticate("local"),
    function (req, res) {
      console.log("hit /api/login page");
      // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
      // So we're sending the user back the route to the provider page because the redirect will happen on the front end
      // They won't get this or even be able to access this page if they aren't authed
      res.json("/provider");
    });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    console.log("hit /api/user_data page");
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.get("/api/user_data/:email", function (req, res) {
    console.log("hit /api/user_data/:email page");
    db.User.findOne({
      where: {
        email: req.params.email
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    })
  });

  //************set up for site********
  app.get("/api/sane_results", function(req, res) {
    console.log("hit /api/sane_results");
    db.Site.findAll({

    }).then(function(dbSite) {
      console.log("dbSite");
      res.json(dbSite);
    }).catch(function(err) {
    console.log(err);

    res.json(err);
    })
  });

  //***********setting up for delete on site********
  // this route should delete a contact from the table, if the id matches the ':id' url param
  app.delete("/api/site/:id", function (req, res) {
    console.log("hit delete /api/site page");
    db.Site.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbSite) {
      res.json(dbSite);
    }).catch(function (err) {
      res.json(err);
    })
  });

  //********for updating the site******/
    // // Update site
  app.put("/api/site/:id", function (req, res) {
    console.log("hit update /api/site page");
    db.Site.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbSite) {
        res.json(dbSite);
      }).catch(function (err) {
        res.json(err);
      })
  });
};


