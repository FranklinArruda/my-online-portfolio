import { readMore,readMoreEventListener } from "./readMore.js";
import { hideShowBar } from "./menuBar.js"; 
import { revealFunction } from "./scrollReveal.js";
import { showScrollUpBtn } from "./scrollButton.js";


    revealFunction();
    
    // Read more function
    const readMoreButton = document.querySelector('.read-more-btn');
    readMoreButton.addEventListener('click', function(event) {
        readMore(event, readMoreButton);
    });

    // Get all elements with the class "read-more"
    const readMoreCards = document.querySelectorAll('.read-more, .hide-card-text');
    readMoreCards.forEach(readMoreCard => { // Add click event listener to each "read-more" element
        readMoreCard.addEventListener('click', event => {
            readMoreEventListener(event, readMoreCard); // Pass the specific readMoreCard clicked
        });
    });

    // Menu icon (hide and show)
    const menuIcon = document.getElementById("menu-icon");
    menuIcon.addEventListener('click', function(event) {
        hideShowBar(event);
    });

    window.addEventListener("scroll", () => {
        showScrollUpBtn();
    });

    
   








 


