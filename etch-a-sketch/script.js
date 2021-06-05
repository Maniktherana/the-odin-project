const etch = document.querySelectorAll('.grid-item')


//Event Listener
for (let i = 0; i < etch.length; i++) {
    etch[i].onmouseover = function(e) {
      e.target.style.backgroundColor = 'black';
    }
  }