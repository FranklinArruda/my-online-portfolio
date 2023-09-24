const readMoreButton = document.querySelector('.read-more-btn');
readMoreButton.addEventListener('click', startReadMore);

// Read more function
function startReadMore(event){
    event.preventDefault();
    const readMoreContainer = document.querySelector('.read-more-text');
    if (readMoreContainer.style.display === "none" || readMoreContainer.style.display === "") {
        readMoreContainer.style.display = "block";
        readMoreButton.textContent = "Read less...";
    } else {
        readMoreContainer.style.display = "none";
        readMoreButton.textContent = "Read more...";
    }
};


/**
 * When hovers over the download CV button it hides the"download" message and only icon remains
 * When mouse leaves appears again
 */
/* const btnContainer = document.querySelector(".section1");
const btnText = document.querySelector(".download-btn");

btnContainer.addEventListener("mouseenter", hideText);
function hideText(event){
    btnText.style.display = 'none'; // Hide the icon on mouse enter
};

btnContainer.addEventListener("mouseleave", showText);
function showText(event){
    btnText.style.display = 'inline-block'; // Hide the icon on mouse enter
}; */


/* const readMoreCard = document.querySelector('.read-more');
readMoreCard.addEventListener('click', startReadMoreCard);

function startReadMoreCard(event){
    event.preventDefault();
    const readMoreTxt = document.querySelector('.read-more-card-text');
    readMoreTxt.style.display = "block";
    
};


const cardBtn = document.querySelector('.hide-card-text');
cardBtn.addEventListener('click', hideCardText);

function hideCardText(event){
    event.preventDefault();

    const readMoreTxt = document.querySelector('.read-more-card-text');
    readMoreTxt.style.display = "none";
}; */

// Get all elements with the class "read-more"
const readMoreCards = document.querySelectorAll('.read-more, .hide-card-text');

// Add click event listeners to all "read-more" elements
readMoreCards.forEach(readMoreCard => {
  readMoreCard.addEventListener('click', (event) => {
    event.preventDefault();

    // Find the associated "read-more-card-text" element within the same card
    const readMoreTxt = readMoreCard.closest('.card').querySelector('.read-more-card-text');

    // Toggle the display of the associated content
    if (readMoreTxt.style.display === "none" || readMoreTxt.style.display === "") {
      readMoreTxt.style.display = "block";
    } else {
      readMoreTxt.style.display = "none";
    }
  });
});

// Similarly, add click event listeners to all "hide-card-text" elements if needed


 