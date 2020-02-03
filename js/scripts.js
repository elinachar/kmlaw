$(document).ready(function(){
  //NAVBAR
  // Shrink Navbar
  // Shrink the Navbar on scroll an undo only for md and lg screens if it is fixed-top
  // Only for medium and large screens
  //Shrink navbar after scrolling
  $(window).scroll(function() {
    // For all pages except for albums - fixed-top navbar
    if ($(window).width() > 767) {
      if ($(window).scrollTop()> 140) {
        $(".navbar.fixed-top").addClass("navbar-shrink");
        $(".logo-big").addClass("logo-small");
      } else {
        $(".navbar.fixed-top").removeClass("navbar-shrink");
        $(".logo-big").removeClass("logo-small");
      }
    } else {
      $(".navbar.fixed-top").removeClass("navbar-shrink");
    }
  });

  // Set border width of triangles in logo
  // (it is not possible to use % in css)
  // Function for resizing the logo in SM and XS screens
  logo_small_navbar_size();
  function logo_small_navbar_size() {
      var logoWidth;
      if ($(window).width() < 767) {
        logoWidth = $(window).width()- $(".navbar-toggler").outerWidth() - parseInt($(".navbar-brand").css("margin-left")) - parseInt($("nav").css("padding-left")) - 50;
      } else {
        logoWidth = 200;
      }
      $(".navbar .logo").css("width", logoWidth);
  }

  // logo_triangles_size();
  function logo_triangles_size() {
    var triangleLeft = $(".triangle-left");
    var triangleRight = $(".triangle-right");
    var logoWidth = $(".court").width();
    var borderWidth = logoWidth*0.345;
    triangleLeft.css("border-right-width", borderWidth);
    triangleRight.css("border-left-width", borderWidth);
  }

  $(window).on('resize', function(){
    // toggleNavbarShrink();
    logo_small_navbar_size();
    // logo_triangles_size();
  });
})
