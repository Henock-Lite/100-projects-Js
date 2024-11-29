# SCROLL_BARRE

This project is a simple implementation of animation on scroll in using css and Javascript 

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

![](./public/Screenshot%20_scroll_barre.png)

### Links

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Grid
- Javascript (ES6+)

### Features

In this project, I used the following css elements and javascript methode:

1.  **`::-webkit-scrollbar-thumb `**:
    This pseudo-element is used to customize the backgroound of schroll barre

2.  **`::-webkit-scrollbar-track`**:  
    This pseudo-element is used to customize the track of schroll barre


3. **`::-webkit-scrollbar`**:  

     This pseudo-element is used to modify the size of schroll barre 



4. **`::-webkit-scrollbar-thumb:hover`**:  

     This pseudo-element is used to hover effect on the  schroll barre 


    - css

/* Style pour la barre de défilement */

::-webkit-scrollbar {
  width: 10px; /* Largeur de la barre */
  height: 50px;
}

/* Style pour le fond de la barre de défilement */

::-webkit-scrollbar-track {
  background: #f1f1f1; /* Couleur du track */
  border-radius: 10px;
}

/* Style pour le curseur de la barre de défilement */

::-webkit-scrollbar-thumb {

  background: linear-gradient(
    to bottom,
    rgb(62, 212, 250), rgb(105, 122, 246),rgb(145, 38, 208);
  );
  border-radius: 10px;
}

/* Change la couleur du curseur au survol */

 ::-webkit-scrollbar-thumb:hover {
    color:red;
   
} 
5. **`getBoundingClientRect()`**

I used  getBoundingClientRect() methode of javascript for start an animation schroll

- Javascript

 Sélectionner toutes les cartes

let cards = document.querySelectorAll(".parent-cards");

window.addEventListener("scroll", () => {

   Vérifier la position de chaque carte par rapport à la fenêtre visible

  cards.forEach((card) => {
    let rect = card.getBoundingClientRect();

    Vérifier si la carte est dans le viewport (par exemple, si elle est à 75% de la hauteur de la fenêtre)

    if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {

       Ajouter la classe d'animation

      card.classList.add("animation");

    } else {
       Si la carte est sortie du viewport, supprimer la classe
      card.classList.remove("animation");
    }
  });
});


### Useful resources

- [Example resource](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) 
- [Example resource](https://stackoverflow.com/questions/16949642/getboundingclientrect-but-relative-to-the-entire-document)
 
 -this helped me know how manipulated the getBoundingClientRect() methode 


## Author

- Github- [H.Lite](https://github.com/Henock-Lite)
