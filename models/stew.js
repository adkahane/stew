var orm = require("../config/orm.js");

var stew = {
  selectAll: function(cb) {
    orm.selectAll("stew", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("stew", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("stew", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export ORM functions to controller
module.exports = stew;