const calculator = document.querySelector('.calculator-container')
const keys = calculator.querySelector('.button-container')
const display = calculator.querySelector('.current-calculation')

function updateDisplay(e) {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent

        if (display.textContent === '0') {
            display.textContent = keyContent
        } else {
            display.textContent = displayedNum + keyContent
        }
        if (action === 'decimal') {
            if(displayedNum.includes('.')) {
                display.textContent = displayedNum
            } else {
                display.textContent = displayedNum + keyContent
            }
        }
    }
}


keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        if (!action) {
            console.log('number key')
        } if (action === 'decimal') {
            console.log('decimal key')
        } if (action === 'clear') {
            console.log('clear key')
        } if (action === 'delete') {
            console.log('delete key')
        } if (action === 'equals') {
            console.log('equals key')
        } if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide' ||
            action === 'modulus'
        ) {
            console.log('operation key')
        }
    }
})

keys.addEventListener('click', updateDisplay)