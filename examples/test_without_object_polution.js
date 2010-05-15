#!/usr/bin/env node
; // a semicolon to make jslint happy

require.paths.unshift(__dirname + "/../lib");
var sc = require("scriptcheck");
sc.setup();

sc.run(10000, sc.ForAll({x: sc.Int}, function(params) {
  var x = params.x;
  return sc.expectEqual((x * x / x), x);
}));