install:
	npm install
brainEven:
	node bin/brainEven.js
brainCalc:
	node bin/brainCalc.js
brainGcd:
	node bin/brainGcd.js
brainProgression:
	node bin/brainProgression.js
brainPrime:
	node bin/brainPrime.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
