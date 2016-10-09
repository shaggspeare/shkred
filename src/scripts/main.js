$( document ).ready(function() {

	$(".navbar-hamburger__nav-button").click(function(){
		$(this).toggleClass("navbar-hamburger__nav-button--active");
		$(".sidenav").toggleClass("sidenav--active")
	});

	$(".go-on__arrow").click(function(e){
		e.preventDefault();
		$('html, body').animate({
		    scrollTop: ($(".additional-info").offset().top - 30)
		}, 700);
	});
    
});
