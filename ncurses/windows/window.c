#include <ncurses.h>

/*

	File Header

*/

typedef struct _win_border_struct {
	chtype ls, rs, ts, bs,
		tl, tr, bl, br;
}WIN_BORDER;

typedef struct _win_struct {
	int starty, startx;
	int height, width;
	WIN_BORDER border;
}WIN;

void init_win_params(WIN *p_win);
void create_box(WIN *win);
void clear_box(WIN *win);


/*

	Main function

*/
int main(int argc, char *argv[]) {
	int ch;
	WIN win;
	
	// INIT JUNK:
	initscr();
	start_color();
	cbreak();
	keypad(stdscr, TRUE);
	noecho();
	
	init_pair(1, COLOR_CYAN, COLOR_BLACK);
	
	
	// BUILD WINDOW I GUESS!
	init_win_params(&win);

	attron(COLOR_PAIR(1));
	printw("Press F1 to exit");
	refresh();
	attroff(COLOR_PAIR(1));
	
	create_box(&win);
	
	
	// CONTROLLER & PROGRAM LOOP BIZ:
	while((ch = getch()) != KEY_F(1)) {
		switch(ch) {
			case KEY_LEFT:
				clear_box(&win);
				--win.startx;
				create_box(&win);
				break;
			case KEY_RIGHT:
				clear_box(&win);
				++win.startx;
				create_box(&win);
				break;
			case KEY_UP:
				clear_box(&win);
				--win.starty;
				create_box(&win);
				break;
			case KEY_DOWN:
				clear_box(&win);
				++win.starty;
				create_box(&win);
				break;
		}
	}
	
	endwin();
	return 0;
}


/*

	Helper functions 'n' junk.

*/

void init_win_params(WIN *p_win) {
	// Default window dimensions:
	p_win->height = 20;
	p_win->width = 30;
	// Centre window to screen s'il te plaît
	p_win->starty = (LINES - p_win->height) / 2;
	p_win->startx = (COLS - p_win->width) / 2;
	
	// Create window border, duder:
	p_win->border.ls = '|';
	p_win->border.rs = '|';
	p_win->border.ts = '-';
	p_win->border.bs = '-';
	p_win->border.tl = '+';
	p_win->border.tr = '+';
	p_win->border.bl = '+';
	p_win->border.br = '+';
}

void create_box(WIN *p_win) {
	int i, j;
	int x, y, w, h;
	
	x = p_win->startx;
	y = p_win->starty;
	w = p_win->width;
	h = p_win->height;
	
	mvaddch(y, x, p_win->border.tl);
	mvaddch(y, x + w, p_win->border.tr);
	mvaddch(y + h, x, p_win->border.bl);
	mvaddch(y + h, x + w, p_win->border.br);
	mvhline(y, x + 1, p_win->border.ts, w - 1);
	mvhline(y + h, x + 1, p_win->border.bs, w - 1);
	mvvline(y + 1, x, p_win->border.ls, h - 1);
	mvvline(y + 1, x + w, p_win->border.rs, h - 1);
	
	refresh();
}

void clear_box(WIN *p_win) {
	int i, j;
	int x, y, w, h;
	
	x = p_win->startx;
	y = p_win->starty;
	w = p_win->width;
	h = p_win->height;
	
	for (j = y; j <= y + h; ++j) {
		for (i = x; i <= x + w; ++i) {
			mvaddch(j, i, ' ');
		}
	}
	
	refresh();
}