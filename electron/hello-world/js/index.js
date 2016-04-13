[
	'http://127.0.0.1:8989/socket.io/socket.io.js',
	'./lib/dominique.js'
]

var _socket = io("http://127.0.0.1:8989", {
	"port": 8989
});

function loop() {
	
};

// A quick test, y'know?
alert(dominique.el.method(true) + ' - ' + dominique.el.method(false));

// Here, I want to set a program loop:
