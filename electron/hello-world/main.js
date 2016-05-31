'use strict';

/*
	REQUIREMENTS
*/
const electron = require('electron');
const app = electron.app;

const WebServer = require("ws").Server;
const dominique = require('./js/lib/dominique/node.js');

//const zmq = require('zmq');

/*
	PROPERTIES
*/
const WEB_PORT = 8989;

var _window = null;
var _ws = new WebServer({ port: WEB_PORT });

/*
	WEB SOCKET JUNK
	TODO: stuff
	
*/
function setup_websocket() {
	// SERVER JUNK
	_ws.on('connection', function(socket) {
		console.log('👍 ');
		
		socket.send("ready");
		
		// Template for socket events:
		socket.on('message', function(message) {
			console.log(message);
			
			console.log('View is ready.');
			dominique.init(socket);
			dominique.hello_world();
		});
		
		// Do something when socket disconnects?
		socket.on('close', function() {
			console.log('💀 ');
		});
	});
};


/*
	WINDOW JUNK
*/
function setup_window() {
	app.on('window-all-closed', function() {
		// On OS X, we don't quit the program when all windows are closed (usually)
		if (process.platform != 'darwin')
			app.quit();
	});

	app.on('ready', function() {
		_window = new electron.BrowserWindow({
			"width": 600,
			"height": 800,
			"backgroundColor": "#404552",
			
			"directWrite": false,
			"textAreasAreResizable": false,
			"darkTheme": true,
			
			"webPreferences": {
				"nodeIntegration": false,
				"java": false,
				"plugins": false,
				"webgl": false,
				"webaudio": false,
				"defaultEncoding": "UTF-8",
			},
		});
		_window.setMenuBarVisibility(false);
		_window.loadURL('file://' + __dirname + '/index.html');
		
		// CLEAN-UP Window
		_window.on('closed', function() {
			_window = null;
		});
	});
};


/*
	CALL OUR SETUPS!
*/
setup_window();
setup_websocket();