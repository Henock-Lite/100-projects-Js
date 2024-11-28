# loading
This project is a simple implementation of animation loading  in using Javascript when the page is load

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

![](../02.%20Loading/assets/public/Screenshot%20load.png)

### Links

## My process


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript (ES6+)


### Features

In this project, I used the following css elements and javascript methode:
1.  **`animation`**:

   This property is used to animation on css 




2. **`@keyframes`**:  

   This method is  for executed the way how the animation property must work  with transform properties

    - css
   
@keyframes loading {
 25%{
  transform:scale(1.5) ;
  background: #50E3C2;
 }

 50%{
  transform: translateY(0px);
 }


 75%{
  transform: translateY(1.0);

 }


 100%{
  transform: translateY(0px);
  

 }
}

3. **`window.addEventListener("DOMContentLoaded", () => {}`**

I used  DOMContentLoaded methode of javascript which runs when the page is loads
 - Javascript
 
 window.addEventListener("DOMContentLoaded", () => {
  const loading = document.querySelector(".loader-parent");
  setTimeout(() => {
    loading.style.display = "none"; // Cache l'élément loader
  }, 1000);
  ding();
});



### Useful resources
- [Example resource](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) -this helped me know how manipulated  the animation properties
## Author
- Github- [H.Lite](https://github.com/Henock-Lite)
