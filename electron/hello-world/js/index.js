[
	'http://127.0.0.1:8989/socket.io/socket.io.js',
	'./lib/loop.js',
	'./lib/dominique.js'
];

var _socket = io("http://127.0.0.1:8989", {
	"port": 8989
});

loop.add(function() {
	// DO SOMETHING EVERY 1 second.
}, 1000);