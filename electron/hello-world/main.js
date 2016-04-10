'use strict';

const electron = require('electron');
const app = electron.app;

const server = require('http').Server(require('express')());
const io = require('socket.io')(server);

var _mainWindow = null;

app.on('window-all-closed', function() {
	// On OS X, we don't quit the program when all windows are closed (usually)
	if (process.platform != 'darwin')
		app.quit();
});

app.on('ready', function() {
	_mainWindow = new electron.BrowserWindow({
		"width": 600,
		"height": 800,
		
		"directWrite": false,
		"textAreasAreResizable": false,
		"darkTheme": true,
		//"frame": false,
		//"transparent": true
		
		"webPreferences": {
			"nodeIntegration": false,
			//"autoHideMenuBar": true,
			"java": false,
			"plugins": false,
		},
	});
	_mainWindow.setMenuBarVisibility(false);
	_mainWindow.loadURL('file://' + __dirname + '/index.html');
	
	// CLEAN-UP Window
	_mainWindow.on('closed', function() {
		_mainWindow = null;
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