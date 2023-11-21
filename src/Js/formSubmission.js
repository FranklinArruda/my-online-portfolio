const phoneInputField = document.querySelector("#phone");

console.log("Initializing intlTelInput...");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    initialCountry: "IE", // Set the country code for Ireland
});

console.log("intlTelInput initialized:", phoneInput);



function sendEmail(event) {
    event.preventDefault();
    /*  // Get the values using the getInputValues function
     const { name, email, phone, subject, message } = getInputValues(); */

    // Get the formatted phone number with the country code
    const phoneNumber = phoneInput.getNumber();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("text-area").value.trim();

    const body =
        " Name: " + name +
        " <br/> Email: " + email +
        " <br/> Contact : " + phoneNumber +
        "<br/> Subject: " + subject +
        "<br/> Message: " + message;

    console.log(body); // For testing purposes

    // Create an HTML-formatted message
    const MSG = `
        <html>
            <head>
                <style>
                    /* Define your CSS styles here */
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
        Body: MSG,
    });

    if (name && email && subject && phoneNumber && message) {
        showPopup();

    } else {
        alert("Please, all fields must be filled out.");

    }
}



// Popup display once the form is filled out
const form = document.querySelector(".form-center");
const popUp = document.querySelector(".popup");

function showPopup() {
    popUp.style.display = "block";
    form.style.display = "none";
}

// Page reload when OK is pressed in the popup
const popupBtn = document.querySelector(".popup-btn");
popupBtn.addEventListener("click", hidePopup);

function hidePopup() {
    popUp.style.display = "none";
    form.style.display = "block";
    window.location.reload();
}


export {
    sendEmail
}