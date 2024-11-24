# Background video
This project is a simple implementation of a background video with interactive controls using JavaScript. It demonstrates how to manipulate the `<video>` HTML element for user interactivity.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Feature](#Feature)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### Screenshot

![](01.bg-video/assets/public/Screenshot%20_bgVideo.png)

### Links

## My process


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript (ES6+)


### Features
In this project, I used the following JavaScript elements:
1. **`addEventListener`**:  
   This method is used to attach event listeners to HTML elements, making the application interactive. clicking a button toggles the video between play and pause modes.

    - Javascript 
   btn.addEventListener("click", () => {
  video.paused
    ? (video.play(), (btn.textContent = ` Pause ⏸️`))
    : (video.pause(), (btn.textContent = `Play ▶️`));
});

### Useful resources
- [Example resource](https://developer.mozilla.org/fr/docs/Web/HTML/Element/video) -this helped me how manipuled the <video>  HTML element  on Javascript
## Author
- Github- [H.Lite](https://github.com/Henock-Lite)
