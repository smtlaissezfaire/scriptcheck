run(1000, forall({x: ints}, function(params) {
  var x = params.x;
  return expectEqual(Math.sq(x), x * x);
}));