describe("ScriptCheck", function() {
  describe("reporters", function() {
    describe("dot", function() {
      after_each(function() {
        dot = require("scriptcheck/reporters/dot");
        dot.setup();
      });

      describe("printing", function() {
        before_each(function() {
          reporter = require("scriptcheck/reporters/dot");
          dotReporter = reporter.dot;

          output = undefined;
          reporter.print = function(out) {
            output = out;
          };
        });

        it("should output a . when passing", function() {
          dotReporter({
            result: true
          });

          output.should.equal(".");
        });

        it("should output a F when failing", function() {
          dotReporter({
            result: false
          });

          output.should.equal("F");
        });
      })

      describe("print function", function() {
        it("should be sys.print", function() {
          require("scriptcheck/reporters/dot").print.should.equal(require("sys").print);
        });
      });
    });
  });
});