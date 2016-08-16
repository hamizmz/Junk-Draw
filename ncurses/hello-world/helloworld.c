#include <ncurses.h>

int main() {
	int ch;
	
	initscr();					/* Start curses mode 		  */
	raw();						/* Line buffering disabled */
	noecho();					/* Stop printing junk, bro! */
	keypad(stdscr, TRUE);		/* We get to press ALL the keys!! */
	
	printw("Type any character to see it nice 'n' thick...\n");
	ch = getch();
	
	if (ch == KEY_F(2))
		printw("F2 Key was pressed, dawg.");
	else {
		printw("You pressed: ");
		attron(A_BOLD);
		printw("%c", ch);
		attroff(A_BOLD);
	}
	
	// Display, wait, and end:
	refresh();					/* Print it on to the real screen */
	getch();					/* Wait for user input */
	endwin();					/* End curses mode		  */

	return 0;
}
