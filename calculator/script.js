const calculator = document.querySelector('.calculator-container')
const keys = calculator.querySelector('.button-container')
const display = calculator.querySelector('.current-calculation')

function updateDisplay(e) {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent

        if (displayedNum === '0') display.textContent = keyContent
        display.textContent = displayedNum + keyContent
        
        if (action === 'decimal')
        if(displayedNum.includes('.')) display.textContent = displayedNum
        display.textContent = displayedNum + keyContent
        
        if (action === 'delete') 
        if (displayedNum !== '0' && displayedNum.length !== 1) display.textContent = displayedNum.substring(0, displayedNum.length - 1);
        display.textContent = '0'

        if (action === 'clear') display.textContent = '0'
        
    }
}

// logs clicks to console
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        if (!action) {
            console.log(key.textContent)
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

// Event listener
keys.addEventListener('click', updateDisplay)