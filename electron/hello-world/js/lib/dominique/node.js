const data = require('./data/examples.js');

module.exports = new (function Dominique() {
	/*
		PROPERTIES
	*/
	var _socket = null;
	
	/*
		API
	*/
	this.init = function(socket) {
		_socket = socket;
	};
	
	this.show = function(dom) {
		_socket.send(JSON.stringify(dom), function() {
			/* Events, bb */
		});
	};
	
	this.hello_world = function() {
		this.show(data["hello_world"])
	}.bind(this);
	
})();