var scriptcheck = require("scriptcheck");

exports.run = function(times, fun) {
  var x;

  if (fun) {
    for (x = 1; x <= times; x++) {
      scriptcheck.reporter.report(fun());
    }

    scriptcheck.puts("");
  } else {
    var descriptions = scriptcheck.descriptions,
        key;

    for (key in descriptions) {
      if (descriptions.hasOwnProperty(key)) {
        scriptcheck.run(times, descriptions[key]);
      }
    }
  }
};
