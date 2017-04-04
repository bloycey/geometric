$( document ).ready(function() {
   $('.testimonials-slider').bxSlider({
  auto: true,
  autoControls: false
});
    $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });   
});



/* Set the width of the side navigation to 250px */

if ($(window).width() < 480) {
    
    console.log("mobile width adjusted");
}


function openNav() {
    if ($(window).width() > 480) {    
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("mySidenav").style.height = "100%";   document.getElementById("mySidenav").style.padding = "15px"; 
    

    } else if ($(window).width() < 480) {

        console.log("Small Nav Clicked");
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("mySidenav").style.height = "100vh";
        document.getElementById("mySidenav").style.padding = "15px";
        
        
}
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    if ($(window).width() > 480) {  
     document.getElementById("mySidenav").style.width = "0";
     document.getElementById("mySidenav").style.padding = "0";   
    }
    else if ($(window).width() < 480) {
        document.getElementById("mySidenav").style.height = "0";
        document.getElementById("mySidenav").style.padding = "0";    
        
    }
}















