'use strict';

const electron = require('electron');
const app = electron.app;

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
	
	// CLEAN-UP
	_mainWindow.on('closed', function() {
		_mainWindow = null;
	});
});