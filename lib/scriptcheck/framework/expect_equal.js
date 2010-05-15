exports.checkEquality = function(expected, actual) {
  return expected === actual;
};

exports.expectEqual = function(expected, actual) {
  var result = {
    result: exports.checkEquality(expected, actual),
    expected: expected,
    actual: actual
  };

  return(result);
};
