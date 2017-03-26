/* Set the width of the side navigation to 250px */

    
function openNav() {
    if ($(window).width() > 480) {    
    document.getElementById("mySidenav").style.width = "250px";

    } else {

    document.getElementById("mySidenav").style.width = "100%";
}
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}












