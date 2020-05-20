install:
	npm install
brainGames:
	node bin/brainGames.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
