const readMoreButton = document.querySelector('.read-more-btn');
readMoreButton.addEventListener('click', toggleReadMore);

// read more function
function toggleReadMore(event){
    event.preventDefault();
    
    const readMoreContainer = document.querySelector('.read-more-text');
    if (readMoreContainer.style.display === "none" || readMoreContainer.style.display === "") {
        readMoreContainer.style.display = "block";
        readMoreButton.textContent = "Read less...";
    } else {
        readMoreContainer.style.display = "none";
        readMoreButton.textContent = "Read more...";
    }
}
