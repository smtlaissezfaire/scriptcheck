#!/usr/bin/env node
; // a semicolon to make jslint happy

var path = require("path");

require.paths.unshift(path.join(__dirname, "..", "..", "lib"));
var scriptcheck = require("scriptcheck");

with(scriptcheck) {
  describe("a number should equal itself", function() {
    var anInt = Random.Integer();
    return expectEqual(anInt, anInt);
  });

  describe("the square root of a square should be itself", function() {
    var anInt = Random.Integer();
    return expectEqual(Math.sqrt(anInt * anInt), anInt);
  });

  describe("the division of a square by itself should be the number", function() {
    var anInt = Random.Integer();
    return expectEqual((anInt * anInt / anInt), anInt);
  });

  run(1000);
}

