// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
// var flash = require('connect-flash');

//************set up for signup and users********
module.exports = function (app) {
  //findAll users 
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
  //create new users
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    console.log("hit /api/signup page");
    db.User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    }).then(function (dbUser) {
      res.render("login");
      // res.json(dbUser);
    }).catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    })
  });
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the provider page.
  // Otherwise the user will be sent an error

  // app.post('/api/login', function(req, res, next) {
  //   passport.authenticate('local', function(err, user, info) {
  //     console.log("hitting /api/login after incorrect password");
  //     if (err) { return next(err); }
  //     if (!user) { 
  //         res.status(401);
  //         res.end(info.message);
  //         return;
  //     }
  //     res.redirect("/provider")
  //   })(req, res, next);
  // });

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

    // db.Site.findAll({})
    //   .then(function (dbResults) {
    //     console.log(dbResults);
    //     res.json(dbResults);
    //   })

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

  // Update contact
  app.put("/api/contacts/:id", function (req, res) {
    console.log("hit update /api/contacts page");
    db.Contact.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbContact) {
        res.json(dbContact);
      }).catch(function (err) {
        res.json(err);
      })
  });


  //***********setting up for delete on sites********

  //   // this route should delete a contact from the table, if the id matches the ':id' url param
  app.delete("/api/contacts/:id", function (req, res) {
    console.log("hit delete /api/contacts page");
    db.Contact.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbContact) {
      res.json(dbContact);
    }).catch(function (err) {
      res.json(err);
    })
  });

  // This will grab the data from the sites table

  // app.get("/api/sane_results", function (req, res) {
  //   db.Site.findAll({}).then(function(dbResults) {
  //     console.log(dbResults);
  //     res.json(dbResults);
  //   })
  // })
};


