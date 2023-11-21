function readMore(event, readMoreButton) {
    event.preventDefault();
    const readMoreContainer = document.querySelector('.read-more-text');
    // Toggle the display of the "read more" container
    if (readMoreContainer.style.display === "none" || readMoreContainer.style.display === "") {
        readMoreContainer.style.display = "block";
        readMoreButton.textContent = "Read less...";
    } else {
        readMoreContainer.style.display = "none";
        readMoreButton.textContent = "Read more...";
    }
}



// Add click event listeners to all "read-more" elements
function readMoreEventListener(event, readMoreCard) {
    event.preventDefault();

    // Find the associated "read-more-card-text" element within the same card
    const readMoreTxt = readMoreCard.closest('.card').querySelector('.read-more-card-text');

    // Toggle the display of the associated content
    if (readMoreTxt.style.display === "none" || readMoreTxt.style.display === "") {
        readMoreTxt.style.display = "block";
    } else {
        readMoreTxt.style.display = "none";
    }
}

export {
    readMore,
    readMoreEventListener
};