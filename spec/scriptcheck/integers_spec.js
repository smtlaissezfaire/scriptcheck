#!/usr/bin/env node
; // a semicolon to make jslint happy

var path = require("path");

require.paths.unshift(path.join(__dirname, "..", "..", "lib"));
var scriptcheck = require("scriptcheck");

with(scriptcheck) {
  describe("a number should equal itself (identity property)", function() {
    var anInt = Random.Integer();
    return expectEqual(anInt, anInt);
  });

  describe("the square root of a square should be the abs value of itself (when positive)", function() {
    var anInt = Random.Integer();
    return expectEqual(Math.sqrt(anInt * anInt), Math.abs(anInt));
  });

  // failures
  // describe("the square root of a square should be itself", function() {
  //   var anInt = Random.Integer();
  //   return expectEqual(Math.sqrt(anInt * anInt), anInt);
  // });
  //

  // the following fails because of long float overruns
  // describe("the division of a square by itself should be the number", function() {
  //   var anInt = Random.Integer();
  //   return expectEqual((anInt * anInt / anInt), anInt);
  // });

  run(1000);
}

