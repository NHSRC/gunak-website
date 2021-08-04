start:
	PORT=6007 yarn start

install:
	yarn install

start-apache-local:
	sudo apachectl restart

local_website_dir := /Library/WebServer/Documents/gunak-website

deploy-local:
	yarn run build
	-rm -rf $(local_website_dir)
	mkdir $(local_website_dir)
	cp -r build/* $(local_website_dir)/
