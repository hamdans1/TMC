$(document).ready(function(){
  //insert logo click and hide body, reveal after Clicker

  $('.content').hide();

  $('.splash-logo').click(function(){
    $('.splash-logo').hide(500);
    $('.content').show(1000);
  });

  $('.dropdown').on({
    mouseenter: function(){
      $(this).children().slideDown('slow');
    },
    mouseleave: function(){
      $('.dropdown-menu').slideUp('fast');
    }
  });


})
