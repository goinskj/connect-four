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

// save turn state variable, 1 === player, -1 === computer
let i = 1

// save player selections
let playerSelections = []

// save computer selections
let computerSelections = []

// capture button clicked and do stuff when cell is clicked
const cellClicks = document.querySelectorAll(".quad");

for(each of cellClicks) {
    each.addEventListener('click', render(e))
}

// changing color of cell
function changeColor(turn) {
    if (turn === 1) {
        console.log("players turn now, computers turn next")
    } else if (turn === -1) {
        console.log("computers turn now, players turn next")
    }
}

changeColor(i)
// keep track of player selections
// check if anyone has connect four
// change turn to computer
// execute computer selection
