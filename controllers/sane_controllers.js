var express = require( "express");

var router = express.Router();

var sane = require("../models/index.js");

router.get("/", function(req, res) {
    // sane.all(function(data){
        console.log("hit / page")
        res.end();
    // })
})


module.exports = router;