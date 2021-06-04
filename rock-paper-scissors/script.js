const choices = document.querySelectorAll('.selection')
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
      console.log(e.target.id)
}

//Event Listener
choices.forEach(choice => choice.addEventListener('click', play))