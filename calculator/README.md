# JavaScript Calculator 

This is a solution to the project: Calculator from The Odin Project's [curriculum](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/calculator).

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


## Overview

### The challenge

- Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
  - add
  - subtract
  - multiply
  - divide

- [More details](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/calculator)

### Screenshot

![screenshot](./screenshot.png)


### Links

🔗 **Live preview:** [link](https://maniktherana.github.io/calculator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- JavaScript

### What I learned

* JavaScript.
* HTML DOM manipulation with Javascript.
* Generating DOM elements from JavaScript

```html
<div id="current-scrren">
                <p><span class="current-calculation">0</span></p>
            </div>
```
```css
.screen-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 1em;
    width: 280px;
    height: 80px;
    margin-bottom: 25px;
    border: 19px solid #0c2742;
    border-radius: 20px;
    background: rgb(45,68,91);
    background: linear-gradient(180deg, rgba(45,68,91,1) 0%, rgba(21,47,64,1) 100%);
    overflow: hidden;
}
```
```js
function updateDisplay(e) {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent

```

### Useful resources

- The Odin Project's [Course](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/dom-manipulation) - This helped me understand how to carry out DOM manipulation.


## Author

👤 **Manik Rana**
* GitHub: [Maniktherana](https://github.com/Maniktherana)

💻 **The Odin Project**
* (https://www.theodinproject.com/home)
