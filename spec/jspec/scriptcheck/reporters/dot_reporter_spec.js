describe("ScriptCheck", function() {
  describe("reporters", function() {
    describe("dot", function() {
      after_each(function() {
        dot = require("scriptcheck/reporters/dot");
      });

      describe("printing", function() {
        before_each(function() {
          scriptcheck.color = false;

          output = undefined;
          scriptcheck.print = function(out) {
            output = out;
          };

          reporter = require("scriptcheck/reporters/dot");
          dotReporter = reporter.report;
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

        it("should output a 's' for skip when nothing is returned", function() {
          dotReporter();
          output.should.equal("s");
        });

        describe("printing with color", function() {
          before_each(function() {
            scriptcheck.color = true;
          });

          it("should print a pass with green", function() {
            dotReporter({result: true});

            output.should.equal(scriptcheck.colors.green + "." + scriptcheck.colors.reset);
          });

          it("should print a failure with red", function() {
            dotReporter({result: false});

            output.should.equal(scriptcheck.colors.red + "F" + scriptcheck.colors.reset);
          });

          it("should print a skip/pending with yellow", function() {
            dotReporter();

            output.should.equal(scriptcheck.colors.yellow + "s" + scriptcheck.colors.reset);
          });
        });
      });
    });
  });
});