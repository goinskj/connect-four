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
const playerSelections = []

// save computer selections
const computerSelections = []

// capture button clicked and do stuff when cell is clicked
const cells = document.querySelectorAll(".quad")
for (each of cells) {
    each.addEventListener('click', function(e) {
        render(e)
    })
}

// function to save selections, change turn, update color
function render(event) {
    //save selections
    let coordinates = event.target.id
    let coordArray = [coordinates[3], coordinates[0]]
    console.log(i)
    // update color
    if (i === 1) {
        playerSelections.unshift(coordArray)
        console.log(coordinates)
        document.getElementById(coordinates).style.color = "#FF000"
        // change turn
        i = i * -1
    } else if (i === -1) {
        computerSelections.unshift(coordArray)
        console.log(coordinates)
        document.getElementById(coordinates).style.color = "#748349"
        // change turn
        i = i * -1
    }
}