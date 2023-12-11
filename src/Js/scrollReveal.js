
// link for scroll reveal:  https://scrollrevealjs.org/guide/customization.html

// This function initializes ScrollReveal and adds animation effects to specific elements
function revealFunction(){
    // Configure ScrollReveal with options
    ScrollReveal({ 
        //reset: true
        distance:'20px',
        duration: 1200,
        easing:'ease',
        delay: 200
        
    });
    ScrollReveal().reveal('.portifolio-img', {origin:'left', rotate:{x:200, z:200}, reset:true});

    ScrollReveal().reveal('.btn-container.section1', {origin:'left', reset:false});
    ScrollReveal().reveal('.btn-container.section2', {origin:'bottom', reset:true});
    
    ScrollReveal().reveal('.input-box', {origin:'bottom', reset:true});

    ScrollReveal().reveal('.btn-container.form', {origin:'bottom',reset:true});

    ScrollReveal().reveal('.portifolio-box', { origin:"left", reset:true});        // Reveal elements from the left
    ScrollReveal().reveal('.about-header, .portifolio-header, .contact-header', { origin:"top", reset:true});  // Reveal elements from the top
    ScrollReveal().reveal('.about-content,  #form', { origin:"right", reset:true});  // Reveal elements from the right   */
    ScrollReveal().reveal('.portifolio-content-header',{origin:"right", reset:true})
   
};

// Export the function for external use
export {
    revealFunction
}
