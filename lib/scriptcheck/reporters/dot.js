exports.setup = function() {
  var sys = require("sys");

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
}

exports.setup();