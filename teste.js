$(window).scroll(function (){
  var sticky = $('#Droba'),
      scroll = $(window).scrollTop();

  if (scroll >= 650) sticky.addClass('Fixo');
  else sticky.removeClass('Fixo');
}); 

/*$(document).ready(function() {
	var stickyOffset = $('#Droba').offset().top;
	
	$(window).scroll(function(){
	  var sticky = $('#Droba'),
		  scroll = $(window).scrollTop();
	
	  if (scroll >= stickyOffset) sticky.addClass('Fixo');
	  else sticky.removeClass('Fixo');
	}); 
}); */