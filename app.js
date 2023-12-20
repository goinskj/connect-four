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

// save turn
let i = 1

// save player selections
let playerSelections = []

// save computer selections
let computerSelections = []

// capture button clicked and do stuff when cell is clicked
const cellClicks = document.querySelectorAll(".quad");

for (each of cellClicks) {
    each.addEventListener('click', function(e) {
        render(e)
    })
}

function render(event) {
    coordinates = event.target.id
    coordArray = []
    for (each of coordinates) {
        coordArray.unshift(each)
    }
    console.log(coordArray)
}