

// Menu Bar
const menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener('click', hideShowBar);

function hideShowBar(event){
  event.preventDefault();
  const navBar = document.querySelector(".nav-bar");
  if (navBar.style.display === "none" || navBar.style.display === ""){
      navBar.style.display = "block"
  } else{
    navBar.style.display = "none"
  }
};

// Read more function
const readMoreButton = document.querySelector('.read-more-btn');
readMoreButton.addEventListener('click', startReadMore);

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


 