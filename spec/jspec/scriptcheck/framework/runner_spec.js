describe("running", function() {
  before_each(function() {
    scriptcheck = require("scriptcheck");
    scriptcheck.reporter.report = function() {};
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

  it("should run the function in each of the desc-ribe blocks when not given a function", function() {
    var called = false;

    var my_fun = function() {
      called = true;
    };
    scriptcheck.describe("foo", my_fun);

    scriptcheck.run(1);
    called.should.be(true);
  });

  it("should call the function the number of times given", function() {
    var calledTimes = 0;

    var my_fun = function() {
      calledTimes += 1;
    };

    scriptcheck.describe("foo", my_fun);
    scriptcheck.run(100);

    calledTimes.should.equal(100);
  });

  it("should output a call the reporter with the results of the run", function() {
    var resultReceived;

    scriptcheck.describe('foo', function() {
      return "a result";
    });

    scriptcheck.reporter.report = function(result) {
      resultReceived = result;
    };

    scriptcheck.run(1);

    resultReceived.should.equal("a result");
  });
});