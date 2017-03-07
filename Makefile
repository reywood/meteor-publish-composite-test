.PHONY: lint test

lint:
	node_modules/.bin/eslint client imports server

test:
	meteor test-packages --driver-package practicalmeteor:mocha
