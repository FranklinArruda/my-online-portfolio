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


/**
 * Display an error message for a form field.
 * Param The input element associated with the error.
 * Param errorElement - The element to display the error message.
 * Param errorMessage - The error message to be displayed.
 */
function showError(inputElement, errorElement, errorMessage) {
    
    // Remove the 'valid' class and add the 'invalid' class to highlight the error
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");

    // Display the error message in the designated error element
    errorElement.innerHTML = errorMessage;
}


/**
 * Display a success state for a form field.
 * Parameter inputElement - The input element associated with the success state.
 * Parameter errorElement - The element to clear for successful validation.
 */
function showSuccess(inputElement, errorElement) {

    // Remove the 'invalid' class and add the 'valid' class to indicate successful validation
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");

    // Clear the error message in the designated error element for successful validation
    errorElement.innerHTML = "";
}

// validate name
function validateName() {

    let name = nameInput.value.trim();
    
    if (name.length === 0) {
        showError(nameInput, nameError, "Name is required");
        return false;
    }
    // Use a regular expression to check if the name contains only letters
    else if (!/^[a-zA-Z\s]+$/.test(name) || !isNaN(name)) {
        showError(nameInput, nameError, "Please enter letters only");
        return false;
    }
    else {
        showSuccess(nameInput, nameError)
        return true;
    }
}


// function to validate email
function validateEmail() {
    let email = emailInput.value;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // should not be empty
    if (email.length === 0) {
        showError(emailInput,emailError,"Email is required")
        return false;
    }
    // email expression characters must match
    else if (!email.match(emailRegex)) {
        showError(emailInput,emailError,"Enter a valid email")
        return false;
    }
    else{
        showSuccess(emailInput,emailError);
    }   return true;
}


function validatePhoneNumber() {
    const phoneNumber = phoneInput.value.trim().replace(/\s/g, '');
    const formattedPhoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
    phoneInput.value = formattedPhoneNumber;

    if (!phoneNumber) {
        showError(phoneInput, phoneError, "Phone number is required");
        return false;
    }

    else if (isNaN(phoneNumber)) {
        showError(phoneInput, phoneError, "Only numbers allowed");
        return false;
    }

    else if (!(phoneNumber.length >= 7 && phoneNumber.length <= 11)) {
        showError(phoneInput, phoneError, "It should be between 7 and 11 digits");
        return false;
    }

    else{
        showSuccess(phoneInput, phoneError);
        return true;
    }
}


// validates subject 
function validateSubject() {

    let subject = subjectInput.value.trim(); // Trim leading and trailing spaces

    let min = 1; // min numbers of characters
    let max = 20; // max numbers of characters

      // Check if the subject is empty
    if (subject.length === 0) {
        showError(subjectInput, subjectError,"Subject is required");
        return false;
    }

    // Check if the length is within the specified range
    else if (!(subject.length >= min && subject.length <= max)) {
        showError(subjectInput, subjectError,"It should not be more than " + max + " characters");
        return false;
    }

    else{
        showSuccess(subjectInput, subjectError);
        return true;
    }
}


function validateTextarea() {
    let textarea = textareaInput.value.trim(); // Trim leading and trailing spaces

    let min = 1; // min numbers of characters
    let max = 500; // max numbers of characters

    // Check if the textarea is empty
    if (!textarea.length) {
        showError(textareaInput, textareaError, "Message is required");
        return false;
    }

    // Check if the textarea length is within the specified range
    else if (!(textarea.length >= min && textarea.length <= max)) {
        showError(textareaInput, textareaError, "Message should be between " + min + " and " + max + " characters");
        return false;
    } 
    
    else {
       showSuccess(textareaInput, textareaError);
       return true;
    } 
};


/* Real-time Validation on Keyup: Or in HTML also works */
// All validation within this function to be exported
function eventListenersFormValidation() {
    nameInput.addEventListener('keyup', validateName);
    emailInput.addEventListener('keyup', validateEmail);
    phoneInput.addEventListener('keyup', validatePhoneNumber);
    subjectInput.addEventListener('keyup', validateSubject);
    textareaInput.addEventListener('keyup', validateTextarea);
};
 
export{
    eventListenersFormValidation
}; 

 









 