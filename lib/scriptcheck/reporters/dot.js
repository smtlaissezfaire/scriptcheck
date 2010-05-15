var sys = require("sys");

exports.setup = function() {
  exports.print = sys.print;

  exports.dot = function(testCase) {
    if (testCase.result === true) {
      exports.print(".");
    } else {
      exports.print("F");
    }
  };
}

exports.setup();