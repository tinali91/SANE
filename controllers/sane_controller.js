var express = require( "express");

var router = express.Router();

var sane = require("../models/index.js");

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

module.exports = router;