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
const message = $('#msg')
const playAgain = $('#play-again')

let boardArray
let turn
let winner

/* Event Listeners
--------------------------------------------------------------------- */
playAgain.addEventListener('click', initState)

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
    // Set board and markers UI
    for (let i = 0; i < boardArray.length; i++) {
        for (let j = 0; j < boardArray[i].length; j++) {
            const cell = document.getElementById(`c${i}r${j}`)
            if (boardArray[i][j] === 1) {
                cell.style.backgroundColor = "red"
            } else if (boardArray[i][j] === -1) {
                cell.style.backgroundColor = "black"
            } else if (boardArray[i][j] === null) {
                cell.style.backgroundColor = "white"
            }
        }
    }

    // Render message & set play button
    if (winner === null) {
        // update message
        if (turn === -1) {
            message.innerHTML = "Its BLACKs turn"
        } else if (turn === 1) {
            message.innerHTML = "Its REDs turn"
        }
    } else if (winner === "TIE") {
        message.innerHTML = 'Its a TIE!!'
    } else if (winner === -1) {
        message.innerHTML = 'BLACK wins!'
    } else if (winner === 1) {
        message.innerHTML = 'RED wins!!'
    }

    // Update play again button
    playAgain.style.visibility = winner ? 'visible' : 'hidden'

}

function checkWinner(col, row) {
    const player = boardArray[col][row]
    const winning_player = 
        checkVerticalWinner(col, row, player) ||
        checkHorizontalWinner(col, row, player) ||
        checkLeftDiag(col, row, player) ||
        checkRightDiag(col, row, player)  ||
        (!boardArray.flat().includes(null) ? "tie" : null)
    return winning_player
}

function checkVerticalWinner(col, row, player) {
    let count = 1
    let startRow = row - 1
    while (startRow >= 0 && boardArray[col][startRow] === player)  {
        count += 1
        startRow -= 1
    }
    return count >= 4 ? player : null
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

    return count >= 4 ? player : null
}

function checkLeftDiag(col, row, player) {
    let count = 1
    let startColLeft = col - 1
    let startRowUp = row + 1
    let startColRight = col + 1
    let startRowDown = row - 1

    while (startColLeft >= 0 && boardArray[startColLeft][startRowUp] === player) {
        count += 1
        startColLeft -= 1
        startRowUp += 1
    }

    while (startColRight <= 5 && boardArray[startColRight][startRowDown] === player) {
        count += 1
        startColRight += 1
        startRowDown -= 1
    }

    return count >= 4 ? player : null
}

function checkRightDiag(col, row, player) {
    let count = 1
    let startColLeft = col - 1
    let startRowUp = row + 1
    let startColRight = col + 1
    let startRowDown = row - 1

    while (startColLeft >= 0 && boardArray[startColLeft][startRowDown] === player) {
        count += 1
        startColLeft -= 1
        startRowDown -= 1
    }

    while (startColRight <= 5 && boardArray[startColRight][startRowUp] === player) {
        count += 1
        startColRight += 1
        startRowUp += 1
    }

    return count >= 4 ? player : null
}
