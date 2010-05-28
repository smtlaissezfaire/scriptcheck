
test: jspec scriptcheck

jspec:
	node spec/jspec/node.js

scriptcheck:
	bin/scriptcheck spec/scriptcheck/boolean_spec.js
	bin/scriptcheck spec/scriptcheck/integers_spec.js
	bin/scriptcheck spec/scriptcheck/reporting_spec.js

lint:
	scripts/lintProject