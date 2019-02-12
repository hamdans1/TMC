$(document).ready(function(){

  $('.nav-dropdown').on('mouseenter', function(){
      $(this).children().slideDown('slow');
    });

  $('.nav-dropdown-menu').on('mouseleave', function() {
    $(this).slideUp('slow');
  });


});
