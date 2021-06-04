const choices = document.querySelectorAll('.selection')
const restart = document.getElementById('restart')
const result = document.getElementById('result')
const modal = document.querySelector('modal')
const playerScore = document.getElementById('playerScore')
const compuerScore = document.getElementById('computerScore')
const scoreBoard = {
    player: 0,
    computer: 0,
    roundCount: 0
}
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

/**
 * Carry out game logic
 * @param {*} e 
 */
function play(e) {
    scoreBoard.roundCount++
    const playerSelection = SELECTIONS.find(selection => selection.name === e.target.id)
    const compterSelection = getComputerChoice()
    const playerChoice = playerSelection.name
    const computerChoice = compterSelection.name
    const win = playRound(playerSelection, compterSelection)
    console.log(playerChoice, computerChoice, win, scoreBoard)
}

/**
 * Randomly assign rock paper or scissors object from SELECTIONS to the computer
 * @returns one of the objects from SELECTIONS
 */
function getComputerChoice() {
    return SELECTIONS[Math.floor(Math.random() * 3)]
}

/**
 * Decide who wins the round and update index.html
 * @param {playerSelection} choice 
 * @param {computerSelection} opponentChoice 
 * @returns Whoever wins the round
 */
function playRound(choice, opponentChoice) {
    
    if (choice === opponentChoice) {
        return 'Draw'
    } else if (choice.beats === opponentChoice.name) {
        scoreBoard.player++
        playerScore.textContent = scoreBoard.player
        return 'Player Wins'
    } else if (choice.name === opponentChoice.beats) {
        scoreBoard.computer++
        computerScore.textContent = scoreBoard.computer
        return 'Computer Wins'
    }
}

function showModal(win) {
    
}

//Event Listener
choices.forEach(choice => choice.addEventListener('click', play))