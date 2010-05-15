
var min = -100000000000000,
    max = 100000000000000;

exports.generate = function() {
  return Math.random() * (max - min) + min;
};