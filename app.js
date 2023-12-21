/* Create a function called `$` for selecting an HTML element
--------------------------------------------------------------------- */
function $(cssSelector) {
    return document.querySelector(cssSelector)
}

/* All HTML elements we need to manipulate (in the order they appear in index.html)
--------------------------------------------------------------------- */
const cannons = $('#cannon-container')
const board = $('#board')
const quad = $('.quad')
let boardArray
let turn

/* Init all global state variables
--------------------------------------------------------------------- */
// Initialize board coordinates
function initState() {
    boardArray = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
    ]

    turn = 1

    // render()

}

initState()


/* Create event listeners for launching checker pieces
--------------------------------------------------------------------- */
// Click listener for cannons
cannons.addEventListener('click', handleClick)
// player clicks, update state (array)
function handleClick(e) {
    // get the id of cannon clicked
    let id = e.target.id
    // call render function
    render(id)
}

function render(id) {
    // Get column number
    let col_num = parseInt(id)

    // Locate the last null item in column found above
    const choicesArray = boardArray[col_num]

    // Find the first null value in the array
    for (let i=0; i < choicesArray.length; i++) {
        if (choicesArray[i] === null) {
            boardArray[col_num][i] = turn
        }
    }
    console.log(boardArray)
}