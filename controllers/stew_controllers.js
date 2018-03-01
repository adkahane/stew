var express = require("express");

var stew = require("../models/stew.js");

var router = express.Router();

// Routes
router.get("/", function(req, res) {
  stew.selectAll(function(data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/stews", function(req, res) {
  stew.insertOne([
    "name"
  ], [
    req.body.stew_name
  ]
  ])
})