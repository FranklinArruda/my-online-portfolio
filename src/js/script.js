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
const btnContainer = document.querySelector(".section1");
const btnText = document.querySelector(".download-btn");

btnContainer.addEventListener("mouseenter", hideText);
function hideText(event){
    btnText.style.display = 'none'; // Hide the icon on mouse enter
};

btnContainer.addEventListener("mouseleave", showText);
function showText(event){
    btnText.style.display = 'inline-block'; // Hide the icon on mouse enter
};



 