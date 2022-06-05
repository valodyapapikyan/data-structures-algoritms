TODO:

- enable source mapping in tsconfig.json and webpack.config.js

- install tools deployment via lifeserver
    npm install npm-run-all --save-dev
    npm install live-server --save-dev

- create script command for starting, watching and deploment for live-server
    "start" : "npm run bundle && npm-run-all --parallel watch serve",
    "bundle": "webpack",
    "watch" : "webpack --watch",
    "serve": "cd dist && live-server"