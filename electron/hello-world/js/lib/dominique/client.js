/*

	Dominique abstracts the DOM for components/modules.
	It allows us to render modules based on a context.
	
	TODO: look at es6 for any useful class stuff perhaps?

*/

window.dominique = new (function Dominique() {
	var _socket = null;
	
	this.connect_socket = function(socket) {
		_socket = socket;
	};
	
})(window, window.document);