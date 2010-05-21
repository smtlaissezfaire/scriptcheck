#!/usr/bin/env node
; // a semicolon to make jslint happy

require.paths.unshift(__dirname + "/../../lib");
var scriptcheck = require("scriptcheck");

with(scriptcheck) {
  describe("a number should equal itself", function() {
    var anInt = new Integer;
    return expectEqual(anInt, anInt);
  });

  describe("the square root of a square should be itself", function() {
    var anInt = new Integer;
    return expectEqual(Math.sqrt(anInt * anInt), anInt);
  });

  describe("the division of a square by itself should be the number", function() {
    var anInt = new Integer;
    return expectEqual((anInt * anInt / anInt), anInt);
  });

  run(100);
}

