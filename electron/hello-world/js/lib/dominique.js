/*

	Dominique abstracts the DOM for components/modules.
	It allows us to render modules based on a context.

*/

window.dominique = new (function Dominique() {
	
	/*
		
		Internal Classes
	
	*/
	var El = function() {};
	El.prototype = new (function() {
		function priv_func() {
			return "Hello, World.";
		};
		
		this.constructor = function() {
			this.some_value = "Salut! J'viens du Québec, yo.";
		};
		
		this.method = function(bool) {
			if (bool)
				return this.some_value;
			return priv_func();
		};
	})();
	
	this.el = new El();
	
})(window, window.document);