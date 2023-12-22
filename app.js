/* Create a function called `$` for selecting an HTML element
--------------------------------------------------------------------- */
function $(cssSelector) {
    return document.querySelector(cssSelector)
}

/* All HTML elements we need to manipulate (in the order they appear in index.html)
--------------------------------------------------------------------- */
const cannons = $('#cannon-container')
const board = $('#board')
const quads = $('.quad')
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

    render()
}

initState()

/* Create event listeners for launching checker pieces
--------------------------------------------------------------------- */
// Click listener for cannons
cannons.addEventListener('click', handleClick)
// player clicks, update state (array)
function handleClick(e) {
    // get the id of cannon clicked
    let id = parseInt(e.target.id)

    // get first occuring null in above column
    let rowNum = boardArray[id].indexOf(null)

    // update board state
    boardArray[id][rowNum] = turn

    // call render function
    render()

    //update turn
    turn *= -1
}

function render() {
    // Set board UI
    for (let i = 0; i < boardArray.length; i++) {
        for (let j = 0; j < boardArray[i].length; j++) {
            const cell = document.getElementById(`c${i}r${j}`)
            if (boardArray[i][j] === 1) {
                cell.style.backgroundColor = "red"
            } else if (boardArray[i][j] === -1) {
                cell.style.backgroundColor = "black"
            }
        }
    }
}