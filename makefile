
test: test_jspec test_scriptcheck

test_jspec:
	node spec/jspec/node.js

test_scriptcheck:
	bin/scriptcheck spec/scriptcheck/boolean_spec.js
	bin/scriptcheck spec/scriptcheck/integers_spec.js
	bin/scriptcheck spec/scriptcheck/reporting_spec.js

lint:
	scripts/lintProject