var sc = require("scriptcheck");

var actualOutput = "";

var contextSetup = function() {
  sc.reporter.print = function(str) {
    actualOutput += str;
  };

  sc.puts = function(str) {
    actualOutput += str + "\n";
  };
};

var contextTeardown = function() {
  sc.setup();
};

var repeatString = function(str, anInt) {
  var newStr = "",
      i;

  for (i = 1; i <= anInt; i++) {
    newStr += str;
  }

  return newStr;
};

describe("it should report the number of successes & failures", function() {
  var anInt = Random.Integer.PositiveSmall();
  var expectedOutput = "";

  actualOutput = "";

  contextSetup();

  sc.run(anInt, function() {
    return sc.expectEqual(true, true);
  });

  expectedOutput += repeatString(".", anInt) + "\n";
  expectedOutput += "\n";
  expectedOutput += "Passes: " + anInt + "\n";
  expectedOutput += "Failures: 0";
  expectedOutput += "\n";
  expectedOutput += "\n";

  var result = expectEqual(expectedOutput, actualOutput);

  contextTeardown();

  return result;
});