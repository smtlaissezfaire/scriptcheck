describe("scriptcheck", function() {
  before_each(function() {
    scriptcheck = require("scriptcheck");
    scriptcheck.setup();
  });

  after_each(function() {
    scriptcheck.setup();
  });

  it("should have the default reporter as the dotReporter", function() {
    var dotReporter = require("scriptcheck/reporters/dot");
    scriptcheck.reporter.should.equal(dotReporter);
  });

  it("should be at version 0.0.1", function() {
    scriptcheck.version.string.should.equal("0.0.1");
  });

  describe("running", function() {
    it("should call the fun with the params", function() {
      var argsGiven = [];

      var fun = function() {
        argsGiven = arguments;
      };

      scriptcheck.run(100, fun);

      argsGiven[0].should.equal(100);
      argsGiven[1].should.equal(scriptcheck.reporter.report);
    });
  });

  it("should have the int generator", function() {
    var intGenerator = require("scriptcheck/generators/int").generate;
    scriptcheck.Int.should.equal(intGenerator);
  });

  it("should have forall", function() {
    var forall = require("scriptcheck/properties/forall").forall;
    scriptcheck.ForAll.should.equal(forall);
  });

  it("should have expectEqual", function() {
    var expectEqual = require("scriptcheck/framework/expect_equal").expectEqual;
    scriptcheck.expectEqual.should.equal(expectEqual);
  });
});