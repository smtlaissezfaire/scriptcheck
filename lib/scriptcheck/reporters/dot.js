var sys         = require("sys"),
    scriptcheck = require("scriptcheck");

var success = {
  color: scriptcheck.colors.green,
  output: "."
};

var failure = {
  color: scriptcheck.colors.red,
  output: "F"
};

var pending = {
  color: scriptcheck.colors.yellow,
  output: "s"
};

var findObject = function(testCase) {
  if (testCase) {
    if (testCase.result === true) {
      return success;
    } else {
      return failure;
    }
  } else {
    return pending;
  }
};

exports.report = function(testCase, options) {
  var type = findObject(testCase),
      str  = "";

  if (scriptcheck.color) {
    str += type.color;
  }

  str += type.output;

  if (scriptcheck.color) {
    str += scriptcheck.colors.reset;
  }

  scriptcheck.print(str);
};

exports.finalReport = function(results) {
  var puts = scriptcheck.puts,
      passes   = 0,
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

  puts("Passes: " + passes);
  puts("Failures: " + failures);
};
