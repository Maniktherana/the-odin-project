
const sizes = document.querySelectorAll('.size')
const modes = document.querySelectorAll('.mode')
const gridContainer = document.querySelector('.grid-container')
const clear = document.getElementById('clear')

function generateGrid(e) {
    console.log(e.target.id)
    if (e.target.id === 'small') {
        smallGrid()
    } else if (e.target.id === 'medium') {
        mediumGrid()
    } else if (e.target.id === 'large') {
        largeGrid()
    }
}

function eraseGrid() {
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild)
    }
}

function action(e) {
    console.log(e.target.id)

}

function smallGrid() {  
    eraseGrid()
    gridContainer.setAttribute('style', 'grid-template-columns: repeat(8, 1fr); grid-template-rows: repeat(8, 1fr)');    
    for (let i = 0; i < 64; i++) {
        let div = document.createElement('div')
        div.classList.toggle('grid-item')
        gridContainer.appendChild(div);
    }
    hoverColor()
}

function mediumGrid() {
    eraseGrid()

    gridContainer.setAttribute('style', 'grid-template-columns: repeat(32, 1fr); grid-template-rows: repeat(32, 1fr)');    
    for (let i = 0; i < 1024; i++) {
        let div = document.createElement('div')
        div.classList.toggle('grid-item')
        gridContainer.appendChild(div);
    }
    hoverColor()
}

function largeGrid() {
    eraseGrid()

    gridContainer.setAttribute('style', 'grid-template-columns: repeat(64, 1fr); grid-template-rows: repeat(64, 1fr)');    
    for (let i = 0; i < 4096    ; i++) {
        let div = document.createElement('div')
        div.classList.toggle('grid-item')
        gridContainer.appendChild(div);
    }
    hoverColor()
}

function clearGrid() {
    let items = document.querySelectorAll('.grid-item')
    items.forEach(item => {
        item.style.backgroundColor = 'rgb(212, 212, 212)'
    })
}

//Event listeners
sizes.forEach(size => size.addEventListener('click', generateGrid))
modes.forEach(mode => mode.addEventListener('click', action))
clear.addEventListener('click', clearGrid)

function hoverColor() {
    let items = document.querySelectorAll('.grid-item')
    items.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#414141'
      })
    })
  }

function pageLoad() {
    mediumGrid()
}

pageLoad()
