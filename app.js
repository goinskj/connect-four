// grab dom elements based on id
// state changes, man dom based on color and id in that spot
// board array

// Initialize board coordinates
const board = [
    [0, 1, 2, 3, 4, 5],
    [0, 1, 2, 3, 4, 5],
    [0, 1, 2, 3, 4, 5],
    [0, 1, 2, 3, 4, 5],
    [0, 1, 2, 3, 4, 5],
    [0, 1, 2, 3, 4, 5],
    [0, 1, 2, 3, 4, 5],
]

// save player selections
let playerSelections = []

// capture button clicked
const cellClicks = document.querySelectorAll(".quad");

//cal back to do stuff when cell is clicked
for (each of cellClicks) {
    each.addEventListener('click', function(e) {
    console.log(e.target.id);
    })
}

// function that will capture coordinate pressed


// console.log(board[2][5])

function changeColor(arg1) {
    // change player variable state management (turn)
    let turn = 1;

    // use -1 to switch turns

    // render function

    // make sure no player peice in that spot



}

function render() {

}