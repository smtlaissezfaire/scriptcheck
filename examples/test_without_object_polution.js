#!/usr/bin/env node
; // a semicolon to make jslint happy

require.paths.unshift(__dirname + "/../lib");
var sc = require("scriptcheck");
sc.setup();

with(sc) {
  run(10000, ForAll({x: Int}, function(params) {
    var x = params.x;
    return expectEqual((x * x / x), x);
  }));
}

