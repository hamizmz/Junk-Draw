/* Copyright 2013 YourName
*
* This file is part of Hello Again.
*
* Hello Again is free software: you can redistribute it
* and/or modify it under the terms of the GNU General Public License as
* published by the Free Software Foundation, either version 3 of the
* License, or (at your option) any later version.
*
* Hello Again is distributed in the hope that it will be
* useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General
* Public License for more details.
*
* You should have received a copy of the GNU General Public License along
* with Hello Again. If not, see http://www.gnu.org/licenses/.
*/
const int WINDOW_WIDTH = 350;
const int WINDOW_HEIGHT = 125;
const int PADDING = 12;

void window_setup(Gtk.Window window) {
	// defaults
	window.title = "Hello World!";
	window.set_border_width(PADDING);
	window.set_position(Gtk.WindowPosition.CENTER);
	window.set_default_size(WINDOW_WIDTH, WINDOW_HEIGHT);
	
	// When we destroy the window, we quit the program, dawg...
	window.destroy.connect(Gtk.main_quit);
}

int main (string[] args) {
	Gtk.init(ref args);
	
	var window = new Gtk.Window();
	window_setup(window);
	
	var label = new Gtk.Label("Hello World!!");
	
	var button = new Gtk.Button.with_label("Click Me!");
	button.clicked.connect(() => {
		button.label = "Hello World!!";
		button.set_sensitive(false);
	});
	
	window.add(label);
	window.add(button);
	window.show_all();
	
	Gtk.main();
	return 0;
}