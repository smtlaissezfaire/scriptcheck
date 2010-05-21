
test: test_jspec test_scriptcheck

test_jspec:
	node spec/jspec/node.js

test_scriptcheck:
	node spec/scriptcheck/integers_spec.js