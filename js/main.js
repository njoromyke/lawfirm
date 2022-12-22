$(document).ready(function () {
  "use strict";
  $(window).on("scroll", function () {
    var top = $(window).scrollTop();
    if (top >= 60) {
      $("nav").addClass("newnav").addClass("shadow-sm").fadeIn(2000);
    } else if ($("nav").hasClass("newnav") && $("nav").hasClass("shadow-sm")) {
      $("nav").removeClass("newnav") && $("nav").removeClass("shadow-sm");
    }
  });

  $(".owl-carousel").owlCarousel({
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true,
      },
      600: {
        items: 1,
        nav: true,
        loop: true,
      },
      1000: {
        items: 1,
        nav: true,
        loop: true,
        autoHeight: true,
      },
    },

    autoplay: true,
    autoplayHoverPause: true,
  });
  var scroll = new SmoothScroll('a[href*="#"]', {
    easing: "easeInOutCubic", // Easing pattern to use
    speed: 400, // Integer. Amount of time in milliseconds it should take to scroll 1000px
  });
});
