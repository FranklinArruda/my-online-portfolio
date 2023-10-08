

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


const formBtn = document.getElementById("btn-send");
formBtn.addEventListener("click",sendEmail);
function sendEmail(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contatc").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("input-field").value; 

    let body ="Name: " + name + " <br/> Email: " + email + " <br/> Contact : " + contatc +"<br/> Subject: " + subject + "<br/> Message: " + message;

    console.log(body);

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
              <p><strong>Name:</strong>${name}</p>
              <p><strong>Email:</strong>${email}</p>
              <p><strong>Phone:</strong>${contact}</p>
              <p><strong>Subject:</strong>${subject}</p>
              <p><strong>Message:</strong>${message}</p>
          </div>
      </body>
  </html>
`;
     
Email.send({
  SecureToken:"5ee25e4c-34da-466e-bf8a-08f44a0bb73f", 
    To : 'franklin.arrudaa@gmail.com',
    From : "franklin.arrudaa@gmail.com",
    Subject :subject,
    Body : MSG,
}).then(
  message => alert(message)
);  

};



 