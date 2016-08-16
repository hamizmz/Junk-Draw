#include <ncurses.h>

WINDOW *create_newwin(int height, int width, int starty, int startx);
void destroy_win(WINDOW *local_win);

int main(int argc, char *argv[]) {
	// Variables
	WINDOW *my_win;
	int startx, starty, height, width;
	int ch;
	
	// Initialisation
	initscr();
	cbreak();
	keypad(stdscr, TRUE);
	
	// Settings
	height = 20;
	width = 30;
	starty = (LINES - height) / 2;
	startx = (COLS - width) / 2;
	
	// Display stuffs
	printw("Press F1 to exit");
	refresh();
	
	my_win = create_newwin(height, width, starty, startx);
	
	// THE PROGRAM LOOP, BRUH
	// This is basically the controller...
	while((ch = getch()) != KEY_F(1)) {
		switch(ch) {
			case KEY_LEFT:
				destroy_win(my_win);
				my_win = create_newwin(height, width, starty, --startx);
				break;
			case KEY_RIGHT:
				destroy_win(my_win);
				my_win = create_newwin(height, width, starty, ++startx);
				break;
			case KEY_UP:
				destroy_win(my_win);
				my_win = create_newwin(height, width, --starty, startx);
				break;
			case KEY_DOWN:
				destroy_win(my_win);
				my_win = create_newwin(height, width, ++starty, startx);
				break;
		}
	}
	
	// Cleanups
	endwin();
	return 0;
}

WINDOW *create_newwin(int height, int width, int starty, int startx) {
	WINDOW *local_win;
	
	local_win = newwin(height, width, starty, startx);
	box(local_win, 0, 0);
	wrefresh(local_win);
	
	return local_win;
}

void destroy_win(WINDOW *local_win) {
	wborder(local_win, ' ', ' ', ' ',' ',' ',' ',' ',' ');
	wrefresh(local_win);
	delwin(local_win);
}