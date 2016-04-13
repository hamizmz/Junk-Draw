'use strict';

const electron = require('electron');
const app = electron.app;

const server = require('http').Server(require('express')());
const io = require('socket.io')(server);



var _window = null;

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
	
	
	// SERVER JUNK
	io.on('connection', function(socket) {
		// Template for socket events:
		socket.on('Message', function(msg) {
			console.log(msg);
		});
		
		// Do something when socket disconnects?
		socket.on('disconnect', function() {
			console.log('User disconnected.');
		});
	});
	
	server.listen(8989, function() {
		console.log("Listening on port 8989...");
	});
});