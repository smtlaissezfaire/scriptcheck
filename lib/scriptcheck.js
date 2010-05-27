var sys = require("sys");

var scriptcheck = exports;

scriptcheck.setup = function() {
  var version = {
    major: 0,
    minor: 0,
    tiny:  1
  };

  version.string = version.major + "." +
                   version.minor + "." +
                   version.tiny;

  scriptcheck.version  = version;
  scriptcheck.reporter = require("scriptcheck/reporters/dot");

  scriptcheck.run = function(times, fun) {
    var x;

    if (fun) {
      for (x = 1; x <= times; x++) {
        scriptcheck.reporter.report(fun());
      }

      scriptcheck.puts("");
    } else {
      var descriptions = scriptcheck.descriptions,
          key;

      for (key in descriptions) {
        if (descriptions.hasOwnProperty(key)) {
          scriptcheck.run(times, descriptions[key]);
        }
      }
    }
  };

  scriptcheck.puts = sys.puts;

  scriptcheck.Random = {
    Integer: require("scriptcheck/generators/int").generate
  };

  scriptcheck.expectEqual = require("scriptcheck/framework/expect_equal").expectEqual;

  scriptcheck.descriptions = {};
  scriptcheck.describe = function(name, fun) {
    scriptcheck.descriptions[name] = fun;
  };
};

scriptcheck.setup();