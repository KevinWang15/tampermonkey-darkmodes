default:
	rm -f bundle.zip
	node gen_options_json.js
	zip -r bundle.zip *.user.js *.json
