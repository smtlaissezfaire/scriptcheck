describe("ScriptCheck", function() {
  describe("Framework", function() {
    describe("expectEqual", function() {
      before_each(function() {
        our_expect = require("scriptcheck/framework/expect_equal");
        expectEqual = our_expect.expectEqual;
      });

      it("should return a positive result", function() {
        var expectation = expectEqual(1, 1);
        expectation.result.should.equal(true);
        expectation.expected.should.be(1);
        expectation.actual.should.be(1);
      });

      it("should use the correct values", function() {
        var expectation = expectEqual("foo", "foo");
        expectation.result.should.equal(true);
        expectation.expected.should.be("foo");
        expectation.actual.should.be("foo");
      });

      it("should return false when not ===", function() {
        var expectation = expectEqual("foo", "bar");
        expectation.result.should.equal(false);
        expectation.expected.should.be("foo");
        expectation.actual.should.be("bar");
      });

      it("should be able to set the equality function", function() {
        our_expect.checkEquality = function(a, b) {
          return true;
        };

        expectation = expectEqual(true, false);
        expectation.result.should.be(true);
      });
    });
  });
});