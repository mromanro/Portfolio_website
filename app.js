
$(document).ready(function() {
  
  //highlight nav button when window is on that section
  $(window).on('scroll', function() {
    $('section').each(function () {
      if($(window).scrollTop() + 40 > $(this).offset().top) {
        var id = $(this).attr('id');
        $('#myNavbar li').removeClass('active');
        $('#myNavbar li a[href=\\#' + id +']').closest('li').addClass('active');
      }
      else if($(window).scrollTop() <= ($(this).height()/3)) {
        $('#myNavbar li').removeClass('active');
        $('#myNavbar li a[href=\\#about]').closest('li').addClass('active');
      }
    });
  });

  //scroll to selected section
  $('#myNavbar a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }
  });

});
