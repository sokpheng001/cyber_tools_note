#include <ncurses.h>
#include <vector>
#include <string>

int main() {
    // Initialize ncurses
    initscr();
    noecho();
    cbreak();
    keypad(stdscr, TRUE); // Enable special keys like arrows
    curs_set(0); // Hide cursor

    std::vector<std::string> text = {
        "Line 1: Welcome to the scrolling terminal!",
        "Line 2: Use arrow keys to scroll.",
        "Line 3: This is line 3.",
        "Line 4: This is line 4.",
        "Line 5: This is line 5.",
        "Line 6: This is line 6.",
        "Line 7: This is line 7.",
        "Line 8: This is line 8.",
        "Line 9: This is line 9.",
        "Line 10: This is line 10.",
        "Line 11: Keep scrolling to see more.",
        "Line 12: Almost there!",
        "Line 13: End of the demo text."
    };

    int max_lines = text.size();
    int current_line = 0;
    int ch;

    while ((ch = getch()) != 'q') { // Press 'q' to quit
        clear();

        // Display a window of 5 lines at a time
        for (int i = 0; i < 5; ++i) {
            if (current_line + i < max_lines) {
                mvprintw(i, 0, text[current_line + i].c_str());
            }
        }

        refresh();

        // Handle keyboard input
        switch (ch) {
            case KEY_UP:
                if (current_line > 0) {
                    current_line--;
                }
                break;
            case KEY_DOWN:
                if (current_line + 5 < max_lines) {
                    current_line++;
                }
                break;
        }
    }

    // End ncurses mode
    endwin();
    return 0;
}
