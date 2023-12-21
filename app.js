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
const cannons = $$('.cannon')
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

/* Create event listeners for launching checker pieces
--------------------------------------------------------------------- */
// Click listener for cannons
for (each of cannons) {
    each.addEventListener('click', (e) => console.log(e.target.id))
}
// Closing the modal



function render(event) {
    // put piece on board
    let col_sel_arr = event.target.id
    // let col_sel = col_sel_arr[1]
    console.log(col_sel_arr)


    // // update color
    // if (i === 1) {
    //     boardArray[parseInt(coordinates[3]), parseInt(coordinates[0])] = "red"
    //     console.log(boardArray)
    //     // change turn
    //     i = i * -1
    // } else if (i === -1) {
    //     boardArray[parseInt(coordinates[3]), parseInt(coordinates[0])] = "black"
    //     console.log(boardArray)
    //     // change turn
    //     i = i * -1
    // }
}