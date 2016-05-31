/*

	Dominique abstracts the DOM for components/modules.
	It allows us to render modules based on a context.

*/

namespace('dominique').client = new (function Client(window, document) {
	var _socket = null;
	var _dom = null;
	
	function crawl(dom, data_node) {
		var children = data_node.children;
		if (children.length === 0)
			return dom;
		dom.appendChild(parse_node(children[0]));
		data_node.children = children.slice(1);
		return crawl(dom, data_node);
	};
	
	function set_attributes(dom, data_node) {
		var attributes = data_node.attributes;
		if (attributes.length === 0)
			return dom;
		dom.setAttribute(attributes[0][0], attributes[0][1]);
		data_node.attributes = attributes.slice(1);
		return set_attributes(dom, data_node);
	};
	
	function create_dom(data_node) {
		var dom = set_attributes(document.createElement(data_node.tag), data_node);
		if (data_node.text)
			dom.appendChild(document.createTextNode(data_node.text));
		return dom;
	};	
	
	function parse_node(data_node) {
		return crawl(create_dom(data_node), data_node);
	};
	
	this.init = function(socket) {
		_socket = socket;
		
		socket.onmessage = function(event) {
			//this.show(this.parse(JSON.parse(event.data)));
			
			if (event.data === 'ready')
				socket.send("ready");
		}.bind(this);
		
		//socket.send('ready');
	}.bind(this);
	
	this.connect_dom = function(dom) {
		_dom = dom;
	};
	
	this.parse = function(data) {
		return parse_node(data);
	};
	
	this.show = function(dom) {
		
		//_dom.appendChild(dom);
	};
	
})(window, window.document);