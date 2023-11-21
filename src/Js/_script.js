import { readMore,readMoreEventListener } from "./readMore.js";
import { hideShowBar } from "./menuBar.js";
import { sendEmail } from "./formSubmission.js";



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


// Form submission
const formBtn = document.getElementById("btn-send");
formBtn.addEventListener('click', function(event) {
    sendEmail(event);
});




/*

// Function to validate email format
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// Function to get values of input fields
function getInputValues() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("input-field").value.trim();

    return {
        name,
        email,
        phone,
        subject,
        message,
    };
};
    




// Function to validate all inputs
const validateInputs = () => {
    const { name, email, phone, subject, message } = getInputValues();

    const maxMessageLength = 300; // Maximum allowed characters for the message


    if (name === '') {
        setError(name, 'Name is required');
    } else {
        setSuccess(name);
    }


    if (email === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(email)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }



    if(phone === '') {
        setError(phone, 'Phone number is required');
    } else if (isNaN(phone)) {
        setError(phone, 'phone cannot be a letters, only numbers')
    } else {
        setSuccess(phone);
    }



    if(subject === '') {
        setError(subject, 'Subject is required');
    } else {
        setSuccess(password);
    }


    if(message === '') {
        setError(subject, 'Subject is required');
    } else if (message.length > maxMessageLength) {
        setError(message, 'Message cannot exceed 500 characters');
    } else {
        setSuccess(password);
    }
};


// Functions for setting error and success styles
const setError = (element, message) => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector('.error');

    errorDisplay.innerText = message;
    input.classList.add('error');
    input.classList.remove('success')
}

const setSuccess = element => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector('.error');

    errorDisplay.innerText = '';
    input.classList.add('success');
    input.classList.remove('error');
};

 */