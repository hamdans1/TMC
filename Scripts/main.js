$(document).ready(function(){

  $('.dropdown').on({
    mouseenter: function(){
      $(this).children().slideDown('slow');
    },
    mouseleave: function(){
      $('.dropdown-menu').slideUp('fast');
    }
  });

  $('.test-box').click(function(){
    $('.test-box').addClass('.test-switch');
  })


})
