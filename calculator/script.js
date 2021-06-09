const buttons = document.querySelectorAll('button')
const screen = document.getElementById('screen')

function dsiplayInput(e){
    console.log(e.target.id)
    screen.textContent = e.target.id
}

// Event Listener
buttons.forEach(button => button.addEventListener('click', dsiplayInput))