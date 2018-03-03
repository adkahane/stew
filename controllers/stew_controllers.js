var express = require("express");

var stew = require("../models/stew.js");

var router = express.Router();

// Routes
router.get("/", function(req, res) {
  stew.selectAll(function(data) {
    var hbsObject = {
      stew: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/stews", function(req, res) {
  stew.insertOne([
    "stew_name"
  ], [
    req.body.stew_name
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/stews/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  stew.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    }
    else {
      res.status(200).end();
    }
  });
});

// Export routes to server.js
module.exports = router;