# Number_Drop
## About the Game:
WHen the game is started, user is provided with random tiles from 2, 4, 8, 16, 32, 64, 128. User has to select pne of the 6 columns to land the random generated tile, such that it lands on a tile with the same number.
System will calculate tile merges based on logic provided below:
--Tiles with the same numbers placed adjacent, will be added to one tile.
--Tiles forming a reverse L shape with t he same number, wll result in a single tile placed with numbers multiplied by 3.
--Above logic continues until user runs out of space.
--Every tile merge will result in the added number added as "Points Earned".

## Highlights:
UI rendering is notable.

## Learnings:
Implementing the functionality required 2 dimensional array.
Collecting of tiles required managing an array that has default 'undefined'. This led to the challenge of finding array elements that are only numbers and identifying if the random numer tile last added to a column is a duplicate and if so, how to merge that. The collision logic is not implemented in the game due to errors resulting.
The absence of merge logic has also led to Points earned not being calculated.

## Technology Used:
HTML, CSS, JavaScript.
