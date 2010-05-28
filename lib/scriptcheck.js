var sys = require("sys");

var scriptcheck = exports;

var version = {
  major: 0,
  minor: 0,
  tiny:  1
};

version.string = version.major + "." +
                 version.minor + "." +
                 version.tiny;

scriptcheck.colors = require("vendor/colours.js/colours");
scriptcheck.reporter = require("scriptcheck/reporters/dot");

scriptcheck.run = require("scriptcheck/runner").run;
scriptcheck.Random = {
 Integer: require("scriptcheck/generators/int").generate,
 Boolean: require("scriptcheck/generators/boolean").generate
};
scriptcheck.expectEqual = require("scriptcheck/framework/expect_equal").expectEqual;

scriptcheck.version  = version;
scriptcheck.descriptions = {};
scriptcheck.describe = function(name, fun) {
  scriptcheck.descriptions[name] = fun;
};

scriptcheck.puts  = sys.puts;
scriptcheck.print = sys.print;
scriptcheck.color = true;

scriptcheck.reset = function() {
  scriptcheck.puts     = sys.puts;
  scriptcheck.print    = sys.print;
  scriptcheck.color    = true;
};
