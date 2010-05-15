
var runTestCase = function(fun, generatorMapping) {
  var assignments = {};

  for (key in generatorMapping) {
    if (generatorMapping.hasOwnProperty(key)) {
      assignments[key] = generatorMapping[key]()();
    }
  }

  return fun(assignments);
};

exports.forall = function(generatorMapping, fun) {
  return function(numTimes, resultYield) {
    var results = [],
        i;

    for (i = 0; i < numTimes; i++) {
      result = runTestCase(fun, generatorMapping);

      if (resultYield) {
        resultYield(result);
      }

      results.push(result);
    }

    return results;
  };
};