$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav li').slideToggle(500);
  });//end slide toggle

  $(window).resize(function() {
	   if (  $(window).width() > 700 ) {
		$('nav li').removeAttr('style');
	 }
	});//end resize
});//end ready
