$(document).ready(function(){

  //$('.nav-dropdown').mouseover(function(){
  //  $(this).children().slideDown('slow');
  //});

  //$('.nav-dropdown-menu').mouseleave(function(){
  //  $(this).slideUp('slow');
  //});

  $(function () {
    $('[data-toggle="popover"]').popover({
      container: 'body',
      html: true,
      content: function() {
        return '<img src="' + $(this).data('img') + '" class="img-thumbnail"/>';
      }
    })
  });



});
