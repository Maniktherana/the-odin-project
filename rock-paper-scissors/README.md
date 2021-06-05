# Rock Paper Scissors Webapp

This is a solution to the project: Rock Paper Scissors from The Odin Project's [curriculum](https://www.theodinproject.com/courses/foundations/lessons/html-css).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

- We’re going to make a simple implementation of grade-school classic “rock paper scissors”. If you don’t know what that is check the Wikipedia article or this ridiculous step-by-step. For the moment we’re just going to play the game from the browser console, but we will revisit this project in a later lesson and add a Graphical User Interface with buttons and text, so don’t forget to keep the code on GitHub! You might notice some ‘Live Preview’ links in the student solutions that have a GUI - this is coming in a later lesson. When you get there don’t forget to come back and add your link!

### Screenshot

![coming soon](./screenshot.jpg)


### Links

🔗 **Live preview:** [here](https://maniktherana.github.io/build-this-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- JavaScript
- DOM manipulation

### What I learned

* JavaScript.
* HTML DOM manipulation with Javascript.
* Modals in HTML.

```html
<!-- Modal -->
    <div class="modal" id="modal">
        <div class="modal-content" id="result">
            <span id="winner-congrats">You Win !! </span>
            <button class="restart-game" id="restart">Restart</button>
        </div>
    </div>
```
```css
.modal {
    display: none;
}
```
```js
if(gameOver()){
        modal.style.display = 'block'
        if (scoreBoard.computer === 5) {
            winnerFinal.textContent = 'Computer Wins !!'
        } else if (scoreBoard.player === 5) {
            winnerFinal.textContent = 'You Win !!'
        }
    }
}
```

### Continued development

This project made me realize that JavaScript is not as easy as it seems on the surface when getting user input is involved. I plan to do more projects involving JavaScript and DOM manipulation. 

I also intent on improving my documentation techniques and even adding JSDocs to my projects

### Useful resources

- The Odin Project's [Course](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/dom-manipulation) - This helped me understand how to carry out DOM manipulation.
- Brad Traversy's [Video](https://www.youtube.com/watch?v=WR_pWXJZiRY) - This is an amazing video that also taught me how to incorporate a modal into my project.


## Author

👤 **Manik Rana**
* GitHub: [Maniktherana](https://github.com/Maniktherana)

💻 **The Odin Project**
* (https://www.theodinproject.com/home)
## Acknowledgments

-Brad Traversy's [Youtube](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA) video was a life saver
