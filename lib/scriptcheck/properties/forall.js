var sc = require("scriptcheck");

exports.forall = function(generatorMapping, fun) {
  return function(numTimes, resultYield) {
    var results = [],
        i;

    for (i = 0; i < numTimes; i++) {
      result = sc.runTestCase(fun, generatorMapping);

      if (resultYield) {
        resultYield(result);
      }

      results.push(result);
    }

    return results;
  };
};