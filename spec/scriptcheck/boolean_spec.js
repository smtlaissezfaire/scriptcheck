describe("generation of a boolean should either be false or true", function() {
  var bool = Random.Boolean();

  if (bool) {
    return expectEqual(bool, true);
  } else {
    return expectEqual(bool, false);
  }
});