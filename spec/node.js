
var path = require("path");

require.paths.unshift(path.join(__dirname, "vendor", "jspec", "lib"));
require.paths.unshift("spec");
require.paths.unshift("lib");

require('jspec');
require('./vendor/jspec_dot_reporter/jspec_dot_reporter');

JSpec
  .exec('spec/scriptcheck/generators/int_spec.js')
  .exec('spec/scriptcheck/properties/forall_spec.js')
  .exec('spec/scriptcheck/framework/expect_equal_spec.js')
  .exec('spec/scriptcheck/framework/describe_spec.js')
  .exec('spec/scriptcheck/framework/runner_spec.js')
  .exec('spec/scriptcheck/reporters/dot_reporter_spec.js')
  .exec('spec/scriptcheck/scriptcheck_spec.js')
  .run({ reporter: JSpecDotReporter, fixturePath: 'spec/fixtures', failuresOnly: true })
  .report();