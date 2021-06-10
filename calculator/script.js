const calculator = document.querySelector('.calculator-container')
const keys = calculator.querySelector('.button-container')




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
        } if (action === 'calculate') {
            console.log('calculate key')
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