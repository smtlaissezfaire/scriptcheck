var sys = require("sys");

exports.setup = function() {
  var version = {
    major: 0,
    minor: 0,
    tiny:  1
  };
  version.string =
    version.major + "." + version.minor + "." + version.tiny;

  exports.version = version;
  exports.reporter = require("scriptcheck/reporters/dot");

  exports.run = function(times, fun) {
    if (fun) {
      fun(times, exports.reporter.report);
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

  exports.ForAll      = require("scriptcheck/properties/forall").forAll;
  exports.expectEqual = require("scriptcheck/framework/expect_equal").expectEqual;

  exports.descriptions = {};
  exports.describe = function(name, fun) {
    exports.descriptions[name] = fun;
  };

  exports.runTestCase = function(fun, generatorMapping) {
    var assignments = {};

    for (key in generatorMapping) {
      if (generatorMapping.hasOwnProperty(key)) {
        assignments[key] = generatorMapping[key]()();
      }
    }

    return fun(assignments);
  };
};

exports.setup();

