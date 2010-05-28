describe("scriptcheck", function() {
  it("should have the default reporter as the dotReporter", function() {
    var dotReporter = require("scriptcheck/reporters/dot");
    scriptcheck.reporter.should.equal(dotReporter);
  });

  it("should be at version 0.0.1", function() {
    scriptcheck.version.string.should.equal("0.0.1");
  });

  it("should have the int generator", function() {
    var intGenerator = require("scriptcheck/generators/int").generate;
    scriptcheck.Random.Integer.should.equal(intGenerator);
  });

  it("should have expectEqual", function() {
    var expectEqual = require("scriptcheck/framework/expect_equal").expectEqual;
    scriptcheck.expectEqual.should.equal(expectEqual);
  });

  it("should have the default puts wired up", function() {
    var sys = require("sys");
    scriptcheck.reset();
    scriptcheck.puts.should.equal(sys.puts);
  });

  it("should have color on by default", function() {
    scriptcheck.reset();
    scriptcheck.color.should.equal(true);
  });

  it("should turn it back on after reseting if turned off", function() {
    scriptcheck.color = false;
    scriptcheck.reset();
    scriptcheck.color.should.equal(true);
  });

  describe("colors", function() {
    it("should be the colors module", function() {
      scriptcheck.colors.should.not.be(undefined);
    });
  });
});