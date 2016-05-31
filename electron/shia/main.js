'use strict';

/*
	REQUIREMENTS
*/
const electron = require('electron');
const app = electron.app;

/*
	PROPERTIES
*/
const WIDTH = 1280;
const HEIGHT = 720;
var _window = null;

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
		var screen = electron.screen.getPrimaryDisplay().workAreaSize;
		
		_window = new electron.BrowserWindow({
			"x": (screen.width - WIDTH) / 2,
			"y": screen.height - HEIGHT - 25,
			"width": WIDTH,
			"height": HEIGHT,
			"frame": false,
			"transparent": true,
			
			"directWrite": false,
			"textAreasAreResizable": false,
			//"darkTheme": true,
			
			"webPreferences": {
				"nodeIntegration": false,
				"java": false,
				"plugins": false,
				//"webgl": false,
				//"webaudio": false,
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