/* Create a function called `$` for selecting an HTML element
--------------------------------------------------------------------- */
function $(cssSelector) {
    return document.querySelector(cssSelector)
}

function $$(cssSelector) {
    return document.querySelectorAll(cssSelector)
}

/* All HTML elements we need to manipulate (in the order they appear in index.html)
--------------------------------------------------------------------- */
const cannons = $$('.cannon-icon')
const board = $('#board')
const quad = $('.quad')

// Initialize board coordinates
const boardArray = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
]

let turn = 1

/* Create event listeners for launching checker pieces
--------------------------------------------------------------------- */
// Click listener for cannons
for (each of cannons) {
    each.addEventListener('click', (e) => render(e))
}

function render(event) {
    // Get column number
    let col_id = event.target.id
    let col_num = parseInt(col_id)

    // Locate the last null item in column found above
    let choicesArray = boardArray[col_num]
    for (let index = choicesArray.length - 1; index >= 0; index--) {
        const choice = choicesArray[index];
        if (choice === null) {
            // Get coordinates of this choice
            if (turn === 1) {
                boardArray[col_num][index] = "black"
            } else if (turn === -1) {
                boardArray[col_num][index] = "red"
            }
        }  
    }
    console.log(boardArray);
}