$(function() {

	//hamburger
	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");
		$(".nav_menu, .overlay").toggleClass("active");
	});
	$(".overlay, .nav_menu li a").click(function(){
		$(".nav_menu, .overlay ").removeClass("active");
		$(".hamburger").removeClass("is-active");
	 });

	//scrollreveal
    window.sr = ScrollReveal({
	    reset: false,
	    distance: '20px',
	    scale:1,
	    easing:'ease-in-out',
	    duration: 600,
	    viewFactor: 0.5
    });
    sr.reveal('.reveal_bottom', {
        origin:'bottom',
        delay: 0
    });
    sr.reveal('.reveal_Lleft', {
        origin:'left'
    });
    sr.reveal('.reveal_right', {
        origin:'right'
    });
    sr.reveal('.reveal_opacity', {
        distance: '0px',
    });
    sr.reveal('.reveal_scale', {
        distance: '0px',
        scale:0.9
    });

    // smooth scrollTo
	$('a[href*="#"]:not([href="#"])').click(function () {
		console.log('test');
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').stop(0, 1).animate({
					scrollTop: target.offset().top-65
				}, 1000);
				return false;
			}
		}
	});
});

// 滾動改變樣式
$(document).ready(function(){
    $(window).scroll(function(){
        if ( $(this).scrollTop() >= 54 ) {
            $("#navbar").addClass("fixed");
        }
        else {
            $("#navbar").removeClass("fixed");
        }
    });
});