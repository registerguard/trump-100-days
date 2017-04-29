$('div.thumbs div.item img').on('click', function(){
  
  var dest = "#" + $(this).data('link');
  
  $('html, body').animate({
    scrollTop: $(dest).offset().top - 50
  }, 1000);
  
});
