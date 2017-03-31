$(document).ready(function(){
  $('.testimonial-slider').slick({
    dots: true,
    infinite: true,
    speed: 300
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












