start:
	PORT=6007 yarn start

install:
	yarn install

start-apache:
	sudo apachectl restart

edit-apache-conf:
	sudo vi /etc/apache2/httpd.conf

local_website_dir := /Library/WebServer/Documents/gunak-website

deploy-local:
	yarn run build
	-rm -rf $(local_website_dir)
	mkdir $(local_website_dir)
	cp -r build/* $(local_website_dir)/

deploy-to-gh-pages:
	yarn run deploy
