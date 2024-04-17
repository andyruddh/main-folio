update:
	gem update
	bundle install
	bundle update

deploy:
	npx prettier . --write
	git add --all
	git commit -m "updates"
	git push

testlocal:
	bundle exec jekyll serve