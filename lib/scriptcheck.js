var sys = require("sys");

exports.setup = function() {
  var version = {
    major: 0,
    minor: 0,
    tiny:  1
  };

  version.string = version.major + "." +
                   version.minor + "." +
                   version.tiny;

  exports.version  = version;
  exports.reporter = require("scriptcheck/reporters/dot");

  exports.run = function(times, fun) {
    var x;

    if (fun) {
      for (x = 1; x <= times; x++) {
        exports.reporter.report(fun());
      }

      exports.puts("");
    } else {
      var descriptions = exports.descriptions,
          key;

      for (key in descriptions) {
        if (descriptions.hasOwnProperty(key)) {
          exports.run(times, descriptions[key]);
        }
      }
    }
  };

  exports.puts = sys.puts;

  exports.Random = {
    Integer: require("scriptcheck/generators/int").generate
  };

  exports.expectEqual = require("scriptcheck/framework/expect_equal").expectEqual;

  exports.descriptions = {};
  exports.describe = function(name, fun) {
    exports.descriptions[name] = fun;
  };
};

exports.setup();

