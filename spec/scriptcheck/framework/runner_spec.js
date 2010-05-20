describe("running", function() {
  before_each(function() {
    scriptcheck = require("scriptcheck");
  });

  it("should call the fun with the params", function() {
    var argsGiven = [];

    var fun = function() {
      argsGiven = arguments;
    };

    scriptcheck.run(100, fun);

    argsGiven[0].should.equal(100);
    argsGiven[1].should.equal(scriptcheck.reporter.report);
  });

  it("should output an empty line after running", function() {
    received = undefined;
    scriptcheck.puts = function(text) {
      received = text;
    };

    var fun = function() {};
    scriptcheck.run(100, fun);

    received.should.equal("");
  });
});

