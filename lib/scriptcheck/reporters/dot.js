exports.setup = function() {
  var sys         = require("sys"),
      scriptcheck = require("scriptcheck");

  exports.print = sys.print;

  exports.report = function(testCase) {
    if (testCase) {
      if (testCase.result === true) {
        exports.print(".");
      } else {
        exports.print("F");
      }
    } else {
      exports.print("s");
    }
  };

  exports.finalReport = function(results) {
    var passes   = 0,
        failures = 0;

    results.forEach(function(result) {
      if (result) {
        if (result.result === true) {
          passes += 1;
        } else {
          failures += 1;
        }
      }
    });

    scriptcheck.puts("Passes: " + passes);
    scriptcheck.puts("Failures: " + failures);
  };
};

exports.setup();