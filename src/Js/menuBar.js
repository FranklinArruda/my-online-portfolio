/* // Menu Bar
const menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener('click', hideShowBar); */

function hideShowBar(event) {
    event.preventDefault();

    const navBar = document.querySelector(".nav-bar");
    // Toggle the display of the navigation bar
    if (navBar.style.display === "none" || navBar.style.display === "") {
        navBar.style.display = "block";
    } else {
        navBar.style.display = "none";
    }
}

export {
    hideShowBar
}