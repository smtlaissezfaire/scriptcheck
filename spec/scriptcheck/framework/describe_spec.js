describe("the desc-ribe function", function() {
  before_each(function() {
    scriptcheck = require("scriptcheck");

    ownKeys = function(obj) {
      var key;
      var keys = [];

      for (key in obj) {
        if (obj.hasOwnKey(key)) {
          keys.push(key);
        }
      }

      return keys;
    };
  });

  it("should have no blocks stored originally", function() {
    ownKeys(scriptcheck.descriptions).length.should.equal(0);
  });

  it("should have the blocks as an object", function() {
    typeof(scriptcheck.descriptions).should.equal('object');
  });

  it("should add the name of the block and the function given to describe", function() {
    var fun = function() {};
    scriptcheck.describe("foo", fun);

    scriptcheck.descriptions["foo"].should.equal(fun);
  });
});
