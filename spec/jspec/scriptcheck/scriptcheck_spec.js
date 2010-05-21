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
    scriptcheck.puts.should.equal(sys.puts);
  });
});