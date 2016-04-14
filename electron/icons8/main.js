'use strict';

const electron = require('electron');
const app = electron.app;

var _window = null;

/*
	WINDOW JUNK
*/
app.on('window-all-closed', function() {
	// On OS X, we don't quit the program when all windows are closed (usually)
	if (process.platform != 'darwin')
		app.quit();
});

app.on('ready', function() {
	_window = new electron.BrowserWindow({
		"width": 900,
		"height": 800,
		
		"directWrite": false,
		"textAreasAreResizable": false,
		
		"webPreferences": {
			"nodeIntegration": false
		}
	});
	_window.setMenuBarVisibility(false);
	_window.loadURL('https://icons8.com/web-app');
	
	// CLEAN-UP Window
	_window.on('closed', function() {
		_window = null;
	});
});