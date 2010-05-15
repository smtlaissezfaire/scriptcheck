
require.paths.unshift('spec', '/Users/scotttaylor/.rvm/gems/ruby/1.8.6/gems/jspec-3.3.2/lib', 'lib');
require('jspec');

require.paths.unshift(__dirname + "/../lib");
require('unit/spec.helper');

JSpec
  .exec('spec/scriptcheck/generators/int_spec.js')
  .exec('spec/scriptcheck/properties/forall_spec.js')
  .exec('spec/scriptcheck/framework/expect_equal_spec.js')
  .exec('spec/scriptcheck/reporters/dot_reporter_spec.js')
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures' })
  .report();
