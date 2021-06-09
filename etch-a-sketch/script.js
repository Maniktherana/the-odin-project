
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
   * 
   * @param {*} e 
   */
function generateGrid(e) {
    if (e.target.id === 'small') {
        currentSize = GRID_SIZE[0]
        console.log(currentSize)
        newGrid(currentSize)
    } else if (e.target.id === 'medium') {
        currentSize = GRID_SIZE[1]
        console.log(currentSize)
        newGrid(currentSize)
    } else if (e.target.id === 'large') {
        currentSize = GRID_SIZE[2]
        console.log(currentSize)
        newGrid(currentSize)
    }
}

/**
 * 
 * @param {*} size 
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
 * 
 * @param {*} e 
 */
 function selectMode(e) {
    console.log(e.target.id)
    if (e.target.id === 'classic') {
        currentMode = GAME_MODES[0]
        newGrid(currentSize)
    } else if (e.target.id === 'dark') {
        currentMode = GAME_MODES[1]
        newGrid(currentSize)
    } else if (e.target.id === 'sprinkles') {
        currentMode = GAME_MODES[2]
        newGrid(currentSize)
    }

}

/**
 * 
 */
 function smallGrid(gameMode) {  
    eraseGrid()
    gridContainer.setAttribute('style', 'grid-template-columns: repeat(8, 1fr); grid-template-rows: repeat(8, 1fr)');    
    for (let i = 0; i < 64; i++) {
        let div = document.createElement('div')
        div.classList.toggle('grid-item')
        gridContainer.appendChild(div)
    }
    hoverColor(gameMode)

}

/**
 * 
 */
function mediumGrid(gameMode) {
    eraseGrid()

    gridContainer.setAttribute('style', 'grid-template-columns: repeat(32, 1fr); grid-template-rows: repeat(32, 1fr)');    
    for (let i = 0; i < 1024; i++) {
        let div = document.createElement('div')
        div.classList.toggle('grid-item')
        gridContainer.appendChild(div)
    }
    hoverColor(gameMode)

}

/**
 * 
 */
function largeGrid(gameMode) {
    eraseGrid()

    gridContainer.setAttribute('style', 'grid-template-columns: repeat(64, 1fr); grid-template-rows: repeat(64, 1fr)');    
    for (let i = 0; i < 4096    ; i++) {
        let div = document.createElement('div')
        div.classList.toggle('grid-item')
        gridContainer.appendChild(div)
    }
    hoverColor(gameMode)

}

/**
 * 
 */
function eraseGrid() {
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild)
    }
}



/**
 * 
 */
function clearGrid() {
    let items = document.querySelectorAll('.grid-item')
    items.forEach(item => {
        item.style.backgroundColor = 'rgb(212, 212, 212)'
    })
}

//Event listeners
sizes.forEach(size => size.addEventListener('click', generateGrid))
modes.forEach(mode => mode.addEventListener('click', selectMode))
clear.addEventListener('click', clearGrid)

/**
 * 
 */
function hoverColor(mode) {
    let items = document.querySelectorAll('.grid-item')
    let x = 0
    items.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
            x++
            if (mode === 'classic') {
                item.style.backgroundColor = '#414141'
            } else if (mode === "dark") {
                item.style.backgroundColor = 'black'

            } else if (mode === "sprinkles") {
                let color = RANDOM_COLORS[Math.floor(Math.random() * RANDOM_COLORS.length)]
                item.style.backgroundColor = color
            } 
            
        })
    })    
}

/**
 * 
 */
function pageLoad() {
    mediumGrid(currentMode)
}

pageLoad()
