/* Create a function called `$` for selecting an HTML element
--------------------------------------------------------------------- */
function $(cssSelector) {
    return document.querySelector(cssSelector)
}

/* All HTML elements we need to manipulate (in the order they appear in index.html)
--------------------------------------------------------------------- */
const cannon = $('.cannon')

// Initialize board coordinates
const board = [
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
// Launching a peice
cannon.addEventListener('click', () => cannon.style.display = 'block')
// Closing the modal
closeModal.addEventListener('click', () => modal.style.display = 'none')
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