
$(document).ready(function() {
  //highlight nav button when clicked. un-highlight others.
  $('#myNavbar li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  });

  $(window).on('scroll', function() {
    $('section').each(function () {
      if($(window).scrollTop() + 40 > $(this).offset().top) {
        var id = $(this).attr('id');
        console.log(id + " " + $(window).scrollTop());
        console.log($(window).scrollTop() + ", " + $(this).offset().top);
        $('#myNavbar li').removeClass('active');
        $('#myNavbar li a[href=\\#' + id +']').closest('li').addClass('active');
      }
      else if($(window).scrollTop() == 0) {
        console.log("entering");
        $('#myNavbar li').removeClass('active');
        $('#myNavbar li a[href=\\#about]').closest('li').addClass('active');
      }
    });
  });
});
