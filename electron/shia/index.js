var _vid = document.getElementById('vid');
var _canvas = document.getElementById('canvas');
var _context = _canvas.getContext("2d");

var _canvas_out = document.getElementById('output');
var _context_out = _canvas_out.getContext("2d");

var _timer = null;


var TARGET = [255, 255, 255];
var RANGE = 120;


_vid.controls = false;
_vid.autoplay = true;
_vid.preload = true;

_canvas_out.width = _canvas.width = 1280;
_canvas_out.height = _canvas.height = 720;


function draw() {
	draw_frame(_vid, _context, _context_out, 1280, 720, TARGET, RANGE);
	_timer = setTimeout(draw, 60);
};

function in_range(src, targ, range) {
	var r1 = src[0];
	var g1 = src[1];
	var b1 = src[2];
	
	var r2 = targ[0];
	var g2 = targ[1];
	var b2 = targ[2];
	
	return (
		r1 >= r2 - range && // r1 < r2 + range &&
		g1 >= g2 - range && // g1 < g2 + range &&
		b1 >= b2 - range // && b1 < b2 + range
	);
};

function draw_frame(vid, cxt, out, w, h, target, range) {
	cxt.drawImage(vid, 0, 0, w, h);
	var frame = cxt.getImageData(0, 0, w, h);
	
	for (var x = 0, pixels = frame.data, s = 4, l = pixels.length; x < l; x += s) {
		if (in_range([pixels[x], pixels[x + 1], pixels[x + 2]], target, range))
			pixels[x + 3] = 0;
	}
	
	out.putImageData(frame, 0, 0);
};

_vid.addEventListener('play', draw, false);
_vid.addEventListener('ended', function() {
	clearTimeout(_timer);
	alert('TEST: done!');
}, false);
_vid.src = "assets/video.ogg"