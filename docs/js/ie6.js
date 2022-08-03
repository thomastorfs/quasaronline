$(document).ready( function() { 
	$('button').hover(function(){
		   $(this).addClass('hover');
	}, function() {
		   $(this).removeClass('hover');
	});
	$('a span').hover(function(){
		   $(this).addClass('hover');
	}, function() {
		   $(this).removeClass('hover');
	});
});