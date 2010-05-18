#!/usr/bin/env node
; // a semicolon to make jslint happy

require.paths.unshift(__dirname + "/../lib");
var sc = require("scriptcheck");
sc.setup();

with(sc) {
  describe("a number should equal itself", function() {
    Int.forAll(function(anInt) {
      return expectEqual(anInt, anInt);
    });
  });

  describe("the square root of a square should be itself", function() {
    Int.forAll(function(anInt) {
      return expectEqual(Math.sqrt(anInt * anInt), anInt);
    });
  });

  describe("the division of a square by itself should be the number", function() {
    Int.forAll(function(anInt) {
      return expectEqual((anInt * anInt / anInt), anInt);
    });
  });
}
