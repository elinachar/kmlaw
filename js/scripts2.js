$(document).ready(function(){
  // Smooth scrolling on single-page
  var $root = $('html, body');
  $('.navbar-nav li a, .nav-item .dropdown-menu a, .logo a').click(function() {
    var href = $.attr(this, 'href');
    // var offset = 80
    // offset = 0;
    // if (href == "#index") {
    //   offset = 135;
    // }
    if (href != undefined && href != '#') {
      var offset = 0;
      console.log("href", href, "window location hash", window.location.hash);
      $root.animate({

        scrollTop: $(href).offset().top - 60
      }, 500, function () {
        window.location.hash = href;
        console.log("href", href, "window location hash", window.location.hash);
      });
    };
  });

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

  // Function for resizing the logo in SM and XS screens
  logo_small_navbar_size();

  // Clicking submit button of contact form
  // Check required fields: name, e-mail and text message and turn to red border if not filled wrt error msg
  // if all required fields are filled, hide all contact-form element after submiting and return thank you msg
  $("#form-submit-button").on("click", function(){
    var nameEntry, emailEntry, textMessageEntry;
    var bNameEntry = true, bEmailEntry = true, bTextMessageEntry = true;
    $(".hidden-before-submit").hide();
    // Check if name has a valid entry
    nameEntry = $("#form-name").val();
    if (nameEntry.length== 0) {
      $("#form-name").css("border", "2px solid #b20000");
      $(".missing-on-submit, .missing-on-submit .missing-name").show();
      bNameEntry = false;
    };

    // Check if email has a valid entry
    emailEntry = $("#form-email").val();
    if (emailEntry.length == 0) {
      $("#form-email").css("border", "2px solid #b20000");
      $(".missing-on-submit, .missing-on-submit .missing-email").show();
      bEmailEntry = false;
    };

    // Check if text message has a valid entry
    textMessageEntry = $(".message-box").val();
    if (textMessageEntry.length == 0) {
      $(".message-box").css("border", "2px solid #b20000");
      $(".missing-on-submit, .missing-on-submit .missing-message").show();
      bTextMessageEntry = false;
    };

    // If all required fields are filled then submit the form and show thanks message
    if (bNameEntry == true && bEmailEntry == true && bTextMessageEntry == true) {
      $(".hidden-after-submit").hide();
      $("#visible-comment").show();
    };
    return false;
  });

})

// On Resize of document
$(window).on('resize', function(){
  logo_small_navbar_size();
});

// After document is loaded
$(window).load(function(){
  // After Google maps have been loaded
  // Add alt tags to all of it images for SEO needs.
  altImgMap();
  function altImgMap() {
    if (typeof google === 'object' && typeof google.maps === 'object') {
      // Get all the images in the google map
      var googleMapImages = $("#map img");
      // Check which images do not have alt attribute and add an empty one
      googleMapImages.each(function( index, value ) {
        if (typeof $(value).attr("alt")== typeof undefined || $(value).attr("alt") == false) {
          $(value).attr("alt" , "Google Maps");
        }
      })
    }
  };

});


// Functions

// Function for resizing the logo in SM and XS screens
function logo_small_navbar_size() {
    var logoWidth;
    if ($(window).width() < 767) {
      logoWidth = $(window).width()- $(".navbar-toggler").outerWidth() - parseInt($(".navbar-brand").css("margin-left")) - parseInt($("nav").css("padding-left")) - 50;
    } else {
      logoWidth = 200;
    }
    $(".navbar .logo").css("width", logoWidth);
}

// Function for API Google Map
function initMap() {
  // The location of position
  var pos = {lat: 35.339967, lng: 25.137086};
  // The map, centered at position
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: pos
  });
  // The marker, positioned at position
  var marker = new google.maps.Marker({position: pos, map: map});
};
