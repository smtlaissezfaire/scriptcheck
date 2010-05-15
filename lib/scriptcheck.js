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
    fun(times, exports.reporter.report);
  };

  exports.Int         = require("scriptcheck/generators/int").generate;
  exports.ForAll      = require("scriptcheck/properties/forall").forall;
  exports.expectEqual = require("scriptcheck/framework/expect_equal").expectEqual;
};

exports.setup();

