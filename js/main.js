// import counterUp from 'counterup2'

// const el = document.querySelector( '.counter' )

// // Start counting, do this on DOM ready or with Waypoints.
// counterUp( el, {
//     duration: 1000,
//     delay: 16,
// } )
// require( 'waypoints/lib/noframework.waypoints.js' )
// const el = document.querySelector( '.counter' )
// new Waypoint( {
//     element: el,
//     handler: function() { 
//         counterUp( el ) 
//         this.destroy()
//     },
//     offset: 'bottom-in-view',
// } )

$(document).ready(function(){
    $(window).on('scroll',function(){
        var top = $(window).scrollTop();
        if(top>=60){
            $("nav").addClass("newnav");
        }
        else
        if($('nav').hasClass('newnav')){
            $('nav').removeClass("newnav");
        }
       
    });

    $(".owl-carousel").owlCarousel({
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:true
            },
            600:{
                items:1,
                nav:true,
                loop:true
            },
            1000:{
                items:1,
                nav:true,
                loop:true,
                autoHeight:true,
            }
        },
        
        autoplay:true,
        autoplayHoverPause:true,
        
        
    });
    var scroll = new SmoothScroll('a[href*="#"]',{
        easing: 'easeInOutCubic', // Easing pattern to use
        speed: 400, // Integer. Amount of time in milliseconds it should take to scroll 1000px
    
    });
});