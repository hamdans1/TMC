$(document).ready(function(){

  $('.dropdown-toggle').on({
    mouseenter: function(){
      $(this).siblings().slideDown('slow');
    },
    mouseleave: function(){
      $(this).siblings().slideUp('fast');
    }
  });


})
