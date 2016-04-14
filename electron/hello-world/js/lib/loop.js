window.loop = new (function Loop(_window) {
	var _tasks = [];
	var _active = false;
	
	function create_task(interval, callback) {
		return {
			stamp: Date.now(),
			interval: interval,
			callback: callback
		};
	};
	
	function check_and_execute(now) {
		return function(task) {
			if (now - task.stamp >= task.interval) {
				task.callback();
				task.stamp = now;
			}
		};
	};
	
	function reset(stamp) {
		return function(task) {
			task.stamp = stamp;
		};
	};
	
	function loop() {
		_tasks.forEach(check_and_execute(Date.now()));
		if (_active)
			_window.requestAnimationFrame(loop);
	};
	
	this.add = function(func, interval) {
		_tasks = _tasks.concat(create_task(interval, func));
	};
	
	this.remove = function(func) {
		_tasks = _tasks.filter(function(task) {
			return task.callback != func;
		});
	};
	
	this.start = function() {
		_active = true;
		_tasks.forEach(reset(Date.now()));
		_window.requestAnimationFrame(loop);
	};
	
	this.stop = function() {
		_active = false;
	};
	
	this.start();
})(window);