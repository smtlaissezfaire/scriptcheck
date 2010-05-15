
require.paths.unshift('spec', '/Users/scotttaylor/.rvm/gems/ruby/1.8.6/gems/jspec-3.3.2/lib', 'lib');
require('jspec');

require.paths.unshift(__dirname + "/../lib");
require('unit/spec.helper');
// require('yourlib');

JSpec
  .exec('spec/scriptcheck/generators_spec.js')
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures' })
  .report();
