publish:
	npm run build
	git add --all
	git commit -m "a new version release"
	git push origin master
	npm publish --registry https://registry.npmjs.org