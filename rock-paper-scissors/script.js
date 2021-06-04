const choices = document.querySelectorAll('.selection')
const restart = document.getElementById('restart')
const result = document.getElementById('result')
const modal = document.querySelector('modal')

const SELECTIONS = [
    {
      name: 'rock',
      emoji: '✊',
      beats: 'scissors'
    },
    {
      name: 'paper',
      emoji: '✋',
      beats: 'rock'
    },
    {
      name: 'scissors',
      emoji: '✌',
      beats: 'paper'
    }
]

function play(e) {
    const playerSelection = SELECTIONS.find(selection => selection.name === e.target.id)
    const compterSelection = getComputerChoice()
    const playerChoice = playerSelection.name
    const computerChoice = compterSelection.name
    const win = playRound(playerSelection, compterSelection)
    console.log(playerChoice, computerChoice, win)
}

//get computer choice
function getComputerChoice() {
    return SELECTIONS[Math.floor(Math.random() * 3)]
}

//decide who wins
function playRound(choice, opponentChoice) {
    if (choice === opponentChoice) {
        return 'Draw'
    } else if (choice.beats === opponentChoice.name) {
        return 'Player Wins'
    } else if (choice.name === opponentChoice.beats) {
        return 'Computer Wins'
    }
}

//Event Listener
choices.forEach(choice => choice.addEventListener('click', play))