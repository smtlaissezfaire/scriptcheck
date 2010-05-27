var scriptcheck = require("scriptcheck");

exports.run = function(times, fun) {
  var reporter = scriptcheck.reporter,
      reports = [],
      result,
      x;

  if (fun) {
    for (x = 1; x <= times; x++) {
      result = fun();
      reports.push(result);
      reporter.report(result);
    }

    scriptcheck.puts("");
    scriptcheck.puts("");
    reporter.finalReport(reports);
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
