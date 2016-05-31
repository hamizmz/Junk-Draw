[
	'./lib/loop.js',
	'./lib/dominique/client.js',
];

var _socket = new WebSocket("ws://127.0.0.1:8989");

loop.add(function() {
	// DO SOMETHING EVERY 1 second.
}, 1000);

dominique.client.connect_dom(document.getElementById("app"));
dominique.client.init(_socket);