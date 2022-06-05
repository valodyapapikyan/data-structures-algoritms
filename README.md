command for starting, watching and deploment for live-server
"start" : "npm run bundle && npm-run-all --parallel watch serve",
"bundle": "webpack",
"watch" : "webpack --watch",
"serve": "cd dist && live-server"
