
const sizes = document.querySelectorAll('.size')
const modes = document.querySelectorAll('.mode')
const gridContainer = document.querySelector('.grid-container')
const clear = document.getElementById('clear')
const GAME_MODES = ['classic', 'dark', 'sprinkles']
const GRID_SIZE = ['small', 'medium', 'large']
const RANDOM_COLORS = ['#fc0303', '#fc5203', '#fc7f03', '#fca503', '#fcc203',
 '#fce803', '#e8fc03', '#c6fc03', '#a1fc03', '#62fc03', '#24fc03', '#03fc28',
  '#03fc77', '#03fcbe', '#03fcdf', '#03dffc', '#0398fc', '#0398fc', '#0345fc', 
  '#0313fc', '#5a03fc', '#8c03fc', '#ad03fc', '#d303fc', '#fc03f8',  '#fc03c2', 
  '#fc0377', '#fc0352']
let currentMode = GAME_MODES[0]
let currentSize = GRID_SIZE[1]


  /**
   * Generate a grid when button of class size is selected and log the size to console
   * @param {*} e 
   */
function generateGrid(e) {

    // If Small is selected, make a new small sized grid
    if (e.target.id === 'small') {
        currentSize = GRID_SIZE[0]
        console.log(currentSize)
        newGrid(currentSize)

    // If Medium is selected, make a new medium sized grid
    } else if (e.target.id === 'medium') {
        currentSize = GRID_SIZE[1]
        console.log(currentSize)
        newGrid(currentSize)

    // If Large is selected, make a new large sized grid
    } else if (e.target.id === 'large') {
        currentSize = GRID_SIZE[2]
        console.log(currentSize)
        newGrid(currentSize)
    }
}

/**
 * Create a new grid with selected size
 * @param {string} size The current size
 */
function newGrid(size) {
    if (size === 'small') {
        smallGrid(currentMode)
    } else if (size === 'medium') {
        mediumGrid(currentMode)
    } else if (size === 'large') {
        largeGrid(currentMode)
    }
}

/**
 * Select a mode when button of class .mode is selected and create a new grid to draw on
 * @param {*} e 
 */
 function selectMode(e) {

    // Show selected game mode
    console.log(e.target.id)

    // Make a new grid of current size with game mode of Classic
    if (e.target.id === 'classic') {
        currentMode = GAME_MODES[0]
        newGrid(currentSize)

    // Make a new grid of current size with game mode of Dark
    } else if (e.target.id === 'dark') {
        currentMode = GAME_MODES[1]
        newGrid(currentSize)

    // Make a new grid of current size with game mode of Sprinkles
    } else if (e.target.id === 'sprinkles') {
        currentMode = GAME_MODES[2]
        newGrid(currentSize)
    }

}

/**
 * Fill grid-container with an 8x8 grid of square divs with class .grid-item.
 * @param {string} gameMode The current game mode
 */
 function smallGrid(gameMode) {  

    // Remove current grid
    eraseGrid()

    // Set CSS for gridContainer
    gridContainer.setAttribute('style', 'grid-template-columns: repeat(8, 1fr); grid-template-rows: repeat(8, 1fr)');    
    
    // Make an 8x8 grid of square divs
    for (let i = 0; i < 64; i++) {
        let div = document.createElement('div')
        div.setAttribute('id', i); 
        div.classList.toggle('grid-item')
        gridContainer.appendChild(div)
    }

    // Color grid with current game mode
    hoverColor(gameMode)

}

/**
 * Fill grid-container with an 16x16 grid of square divs with class .grid-item.
 * @param {string} gameMode The current game mode
 */
function mediumGrid(gameMode) {
    
    // Remove current grid
    eraseGrid()

    // Set CSS for gridContainer
    gridContainer.setAttribute('style', 'grid-template-columns: repeat(32, 1fr); grid-template-rows: repeat(32, 1fr)');    
    
    // Make a 16x16 grid of square divs
    for (let i = 0; i < 1024; i++) {
        let div = document.createElement('div')
        div.setAttribute('id', i); 
        div.classList.toggle('grid-item')
        gridContainer.appendChild(div)
    }
    
    // Color grid with current game mode
    hoverColor(gameMode)

}

/**
 * Fill grid-container with an 64x64 grid of square divs with class .grid-item.
 * @param {string} gameMode The current game mode
 */
function largeGrid(gameMode) {
    
    // Remove current grid
    eraseGrid()

    // Set CSS for gridContainer
    gridContainer.setAttribute('style', 'grid-template-columns: repeat(64, 1fr); grid-template-rows: repeat(64, 1fr)');    
    
    // Make a 64x64 grid of square divs
    for (let i = 0; i < 4096    ; i++) {
        let div = document.createElement('div')
        div.setAttribute('id', i); 
        div.classList.toggle('grid-item')
        gridContainer.appendChild(div)
    }
    
    // Color grid with current game mode
    hoverColor(gameMode)

}

/**
 * Remove any contents of .gridContainer.
 */
function eraseGrid() {

    // While gridContainer contains a .grid-item, remove that item
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild)
    }
}

/**
 * Clear the grid of any sketches when the Clear button is clicked.
 */
function clearGrid() {
    newGrid(currentSize)
}

//Event listeners
sizes.forEach(size => size.addEventListener('click', generateGrid))
modes.forEach(mode => mode.addEventListener('click', selectMode))
clear.addEventListener('click', clearGrid)

/**
 * Color the square div when on mouse hover according to the selected mode.
 * @param {string} mode The current game mode
 */
function hoverColor(mode) {

    // Select all items in gridContainer
    let items = document.querySelectorAll('.grid-item')

    // For each .grid-item, color on mouseover
    items.forEach((item) => {        
        item.addEventListener('mouseover', () => {    
            
            // If game mode is classic, make the div grey
            if (mode === 'classic') {
                item.style.backgroundColor = '#414141'

            // If game mode is dark, make the div black
            } else if (mode === "dark") {
                item.style.backgroundColor = `rgba(0 , 0, 0, .999)`

            // If game mode is sprinkles, make the div random color
            } else if (mode === "sprinkles") {
                let color = RANDOM_COLORS[Math.floor(Math.random() * RANDOM_COLORS.length)]
                item.style.backgroundColor = color

            } 
            
        })
    })    
}

/**
 * Set grid size when page is loaded
 */
function pageLoad() {
    mediumGrid(currentMode)
}

pageLoad()
