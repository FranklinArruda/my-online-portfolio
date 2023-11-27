
// link for scroll reveal:  https://scrollrevealjs.org/guide/customization.html

// This function initializes ScrollReveal and adds animation effects to specific elements
function revealFunction(){
    // Configure ScrollReveal with options
    ScrollReveal({ 
        reset: true,
        distance:'15px',
        duration: 1000,
        easing:'ease-out',
        delay: 400
        
    });

    ScrollReveal().reveal('.about-header, .portifolio-header, .contact-header', { origin:"top", reset:true});  // Reveal elements from the top
    ScrollReveal().reveal('.portifolio-img, .about-content,  #form', { origin:"right", reset:true});  // Reveal elements from the right
    ScrollReveal().reveal('.home-content, .portifolio-box', { origin:"left", reset:true});        // Reveal elements from the left
    ScrollReveal().reveal('.scroll-up', {origin:'left', rotate:{x:100, z:100}, reset:true});  // Custom animation for the scroll-up element (with a typo correction)
};

// Export the function for external use
export {
    revealFunction
}
