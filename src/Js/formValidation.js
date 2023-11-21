const nameError = document.getElementById("name-error");
const nameInput = document.getElementById("name");

const emailError = document.getElementById("email-error");
const emailInput = document.getElementById("email");

const phoneError = document.getElementById("phone-error");
const phoneInput = document.getElementById("phone");

const subjectError = document.getElementById("subject-error");
const subjectInput = document.getElementById("subject");

const textareaError = document.getElementById("textarea-error");
const textareaInput = document.getElementById("text-area");

console.log("hi there")

function validateName() {

    // Check if nameInput is not null
    if (!nameInput) {
        console.error("Name input element not found.");
        return false;
    }

    let name = nameInput.value.trim(); // Trim leading and trailing spaces
    
    if (name.length === 0) {
        nameInput.classList.remove("valid");
        nameInput.classList.add("invalid");
        nameError.innerHTML = "Name is required";
        return false;
    }

    // Use a regular expression to check if the name contains only letters
    if (!/^[a-zA-Z\s]+$/.test(name) || !isNaN(name)) {
        nameInput.classList.remove("valid");
        nameInput.classList.add("invalid");
        nameError.innerHTML = "Please enter letters only"; // Set the color of the text to green
        return false;
    }
    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");
    nameError.innerHTML = ""; // Clear the error message
    return true;
}


// function to validate email
function validateEmail() {

    let email = emailInput.value;

    var regexExpressionEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // shout not be empty
    if (email.length === 0) {
        emailInput.classList.remove("valid");
        emailInput.classList.add("invalid");
        emailError.innerHTML = "Email is required";
        return false;
    }
    
    // email expression characters must match
    if (!email.match(regexExpressionEmail)) {
        emailInput.classList.remove("valid");
        emailInput.classList.add("invalid");
        emailError.innerHTML = "Enter a valid email";
        return false;
    }

    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");
    emailError.innerHTML = ""; // Clear the error message
    return true;

}


// to validate that the variable represents a number and then ensure 
// it's not an empty string, using toString() can be a valid approach.

// to check if a variable is an empty string, you don't necessarily need 
// to explicitly convert it to a string using toString().

// if you use toString(), then use the (=== 0) to validate an empty string
// if not converted, then use the (=== "") to validate an empety string


function validatePhoneNumber() {
    // Convert the number to a string to check its length
    // the trim() prevents the user from typing speces while typing
    let phoneNumber = phoneInput.value.trim().toString();
    
    // Insert spaces after every third digit
    phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
    // Update the input value
    phoneInput.value = phoneNumber;

    if (phoneNumber.length === 0) {
        phoneInput.classList.remove("valid");
        phoneInput.classList.add("invalid");
        phoneError.innerHTML = "It should not be empty";
        return false;
    }

    // Check if the length is between 7 and 11 (inclusive)
    if (phoneNumber.length >= 7 && phoneNumber.length <= 12) {
        phoneInput.classList.remove("invalid");
        phoneInput.classList.add("valid");
        phoneError.innerHTML = ""; // Clear any previous error message
        return true;
    }

    if (/^[a-zA-Z\s]+$/.test(phoneNumber) || isNaN(phoneNumber)) {
        phoneInput.classList.remove("valid");
        phoneInput.classList.add("invalid");
        phoneError.innerHTML = "Only numbers allowed";
        return false;
    } 
    else {
        phoneInput.classList.remove("valid");
        phoneInput.classList.add("invalid");
        phoneError.innerHTML = "It should be between 7 and 11 digits";
        return false;
    }
}
// validates subject 
function validateSubject() {
    let subject = subjectInput.value.trim(); // Trim leading and trailing spaces

      // Check if the subject is empty
    if (subject.length === 0) {
        subjectInput.classList.remove("valid");
        subjectInput.classList.add("invalid");
        subjectError.innerHTML = "Subject is required";
        return false;
    }

    let min = 1; // min numbers of characters
    let max = 30; // max numbers of characters

    // Check if the length is within the specified range
    if (!(subject.length >= min && subject.length <= max)) {
        subjectInput.classList.remove("valid");
        subjectInput.classList.add("invalid");
        subjectError.innerHTML = "It should not be more than 30 characters"; // Clear any previous error message
        return false;
    }

    // If all checks pass, set the input as valid
    subjectInput.classList.remove("invalid");
    subjectInput.classList.add("valid");
    subjectError.innerHTML = ""; // Clear any previous error message
    return true;
}

// validates textarea 
function validateTextarea() {
    let textarea = textareaInput.value.trim(); // Trim leading and trailing spaces

    let min = 1; // min numbers of characters
    let max = 500; // max numbers of characters

    // Check if the textarea is empty
    if (textarea.length === 0) {
        textareaInput.classList.remove("valid");
        textareaInput.classList.add("invalid");
        textareaError.innerHTML = "Message is required";
        return false;
    }
 
    // Check if the textarea length is within the specified range
    if (textarea.length >= min && textarea.length <= max) {
        textareaInput.classList.remove("invalid");
        textareaInput.classList.add("valid");
        textareaError.innerHTML = ""; // Clear any previous error message
        return true;
    } else {
        textareaInput.classList.remove("valid");
        textareaInput.classList.add("invalid");
        textareaError.innerHTML = "Message should be between " + min + " and " + max + " characters";
        return false;
    } 
}
