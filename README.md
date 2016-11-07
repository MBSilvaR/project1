# project1
d.o.t.s.

**Synopsis:
This dynamic game was developed as a first project for General Assembly's Web Development Immersive class. It was originally conceived as a poor-man's version of the mobile game dots, but eventually evolved into a perception game, in which the user must identify the unique dot that is a different color from the ones provided in the color guide (the console is located on the left side of the board). The user has 10 seconds to find the unique dot, and if she/he succeeds, the board grows another column/row, where the user has to find the randomized unique dot again, and again, and again. The user wins until the user loses.


**Technologies used:
This game was developed using Javascript, jQuery, CSS, and HTML.


**Unsoved problems: Implementation of levels and scoreboard. 


**Pseudocode:

- Set up board to contain dots. Initial board's area is 2 rows of dots by 2 columns of dots.
- Make all dots clickable.
- Create color guide to compare with dots on board.
- Create countdown timer from 10 to 0
- Randomize color assignation for each dot on the board, exclusively using the same colors as the color guide. 
- Create another random color assignation to be applied to just one dot on the board. This particular dot will be a slight color variation from the colors in the color guide, enough to make it identifiable, but subtly.
- Once this "different" dot is clicked by the user, the board is randomized again and gets a new row and a new column, as well as a new dot that doesn't match the color guide, to be found again by the user.
- The board continues growing until it becomes 12 columns wide by 12 rows long. After that it iterates the randomization while staying the exact same size.
- If a dot with the same color as the dots in the color guide is clicked, the timer goes down to 0 and the game ends.
- If the timer gets to zero before the user finds and clicks on the "different" dot, the game ends.


**User Stories:

"As an user, I want a fun and dynamic game with simple rules that will provide inane entretainment"

"As an user, I want a game with clean graphics that won't overwhelm my eyes with nonsense"




