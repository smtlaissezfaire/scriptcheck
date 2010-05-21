var path = require("path");

require.paths.unshift(path.join(__dirname, "..", "vendor", "jspec", "lib"));
require.paths.unshift(path.join(__dirname, "..", "vendor", "jspec_dot_reporter"));
require.paths.unshift("spec/jspec");
require.paths.unshift("lib");

require('jspec');
require('jspec_dot_reporter');

JSpec.include({
  beforeSpec: function() {
    scriptcheck = require("scriptcheck");
    scriptcheck.setup();
    scriptcheck.reporter.setup();
    scriptcheck.puts = function() {};
  },

  afterSpec: function() {
    scriptcheck.setup();
  }
});


JSpec
  .exec('spec/jspec/scriptcheck/generators/int_spec.js')
  .exec('spec/jspec/scriptcheck/framework/expect_equal_spec.js')
  .exec('spec/jspec/scriptcheck/framework/describe_spec.js')
  .exec('spec/jspec/scriptcheck/framework/runner_spec.js')
  .exec('spec/jspec/scriptcheck/reporters/dot_reporter_spec.js')
  .exec('spec/jspec/scriptcheck/scriptcheck_spec.js')
  .run({ reporter: JSpecDotReporter, fixturePath: 'spec/fixtures', failuresOnly: true })
  .report();