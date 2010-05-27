var weight = function(num, exp) {
  return Math.pow(num, exp);
};

exports.generate = function() {
  var value = Math.floor(weight(Math.random(), 3) * 100000000);
  return (Math.random() < 0.5 ? value : -value);
};

exports.generate.PositiveSmall = function() {
  var value = Math.floor(weight(Math.random(), 1) * 100);
  return value;
};
