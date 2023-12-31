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
let winner
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
    winner = null
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

    if (winner){
        return
    }

    // get first occuring null in above column
    let rowNum = boardArray[id].indexOf(null)

    // update board state
    boardArray[id][rowNum] = turn

    //update turn
    turn *= -1

    winner = checkWinner(id, rowNum)

    // call render function
    render()

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

function checkWinner(col, row) {
    const player = boardArray[col][row]
    checkVerticalWinner(col, row, player)
    checkHorizontalWinner(col, row, player)
    // checkLeftDiag(col, row, player) ||
    // checkRightDiag(col, row, player)
    // checkTie(col, row, player)
    
}

function checkVerticalWinner(col, row, player) {
    let count = 1
    let startRow = row - 1
    while (startRow >= 0 && boardArray[col][startRow] === player)  {
        count += 1
        startRow -= 1
    }
    return count >= 4 ? console.log(player) : null
}

function checkHorizontalWinner(col, row, player) {
    let count = 1
    
    let startColLeft = col - 1
    let startColRight = col + 1
    while (startColLeft >= 0 && boardArray[startColLeft][row] === player)  {
        count += 1
        startColLeft -= 1
    }
    while (startColRight <= 5 && boardArray[startColRight][row] === player) {
        count += 1
        startColRight += 1
    }
    return count >= 4 ? console.log(player) : null
}

function checkLeftDiag(col, row, player) {

}

function checkRightDiag(col, row, player) {

}