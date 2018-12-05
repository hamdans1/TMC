$(document).ready(function(){
  //insert logo click and hide body, reveal after Clicker


  $('.dropdown').on({
    mouseenter: function(){
      $(this).children().slideDown('slow');
    },
    mouseleave: function(){
      $('.dropdown-menu').slideUp('fast');
    }
  });


})
