
import { eventListenersFormValidation } from "./formValidation.js";

// Function to get values of input fields
function getInputValues() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("text-area").value.trim();

    return {
        name,
        email,
        subject,
        message,
    };
};

// phone number is separate because of the country code labrary 
const phoneInput = document.getElementById("phone");

const phoneCode = window.intlTelInput(phoneInput, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    initialCountry: "IE", // Set the country code for Ireland
});

// validation functions 
eventListenersFormValidation();


// send email form
function sendEmail() {

    // get phone number
    const phoneNumber = phoneCode.getNumber();

    // Extract values from the returned object
    const inputValues = getInputValues();
    const { name, email, subject, message } = inputValues; 
    console.log("testing ok")
   // Create an HTML-formatted message
    const bodyMessage = `
        <html>
            <head>
                <style>
                    
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f0f0f0;
                    }
                    .container {
                        max-width: 600px;
                        height: auto;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #c0f067;;
                        border-radius: 5px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #333;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Contact Form Submission</h1>
                    <p><strong>Name: </strong>${name}</p>
                    <p><strong>Email: </strong>${email}</p>
                    <p><strong>Phone: </strong>${phoneNumber}</p>
                    <p><strong>Subject: </strong>${subject}</p>
                    <p><strong>Message: </strong>${message}</p>
                </div>
            </body>
        </html>
    `;

    // Send email using SMTP
    Email.send({
        SecureToken: "5ee25e4c-34da-466e-bf8a-08f44a0bb73f",
        To: 'franklin.arrudaa@gmail.com',
        From: "franklin.arrudaa@gmail.com",
        Subject: subject,
        Body: bodyMessage,
    }); 
};

const formCenter = document.querySelector(".form-center");

// show pop up when form is filled out and reCAPCHA is checked
function showPopup() {
    popUp.style.display = "block";
    formCenter.style.display = "none";
}

// hides pop up when all is well and checked. 
// Then pages reload it again
function hidePopup() {
    popUp.style.display = "none";
    formCenter.style.display = "block";
    // Reset the form instead of reloading the page
    window.location.reload();
};



const reCAPCHA = document.querySelector(".g-recaptcha");
function showRECAPTCHA(){
    reCAPCHA.style.display = "flex"
};

function hideRECAPTCHA(){
    reCAPCHA.style.display = "none"
};


const popUp = document.querySelector(".popup");
const form = document.querySelector(".form-btn");

form.addEventListener("click", (event) => {
    event.preventDefault();
      
    // Check if reCAPTCHA is completed
    var response = grecaptcha.getResponse();

    // Extract values from the returned object
    const inputValues = getInputValues();
    const { name, email, subject, message } = inputValues; 

    if (!(name && email && phoneInput && subject && message)) {
        alert("All the fields must be filled out!!!");
        return false;
    } 

    else if (!response) {
        // If not completed, display an error message or take appropriate action
        showRECAPTCHA();
        alert("Please mplete the reCAPTCHA.");
        return false;
      } 
    else {
        hideRECAPTCHA();
        sendEmail();
        showPopup();
        return true;
    }
});

const popupBtn = document.querySelector(".popup-btn");
popupBtn.addEventListener("click", hidePopup);



 