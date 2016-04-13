/*
	
         _ __   __ _ _ __ ___   ___  ___ _ __   __ _  ___ ___
        | '_ \ / _` | '_ ` _ \ / _ \/ __| '_ \ / _` |/ __/ _ \
        | | | | (_| | | | | | |  __/\__ \ |_) | (_| | (_|  __/
        |_| |_|\__,_|_| |_| |_|\___||___/ .__/ \__,_|\___\___|
                                        |_|

*/
(function(window) {
	function namespace(names) {
		if (!names.length)
			return this;
		var space = this[names[0]] = this[names[0]] || {};
		return namespace.call(space, names.slice(1));
	};

	window.namespace = function(namesSTR) {
		return namespace(namesSTR.split('.'));
	};
})(window);
