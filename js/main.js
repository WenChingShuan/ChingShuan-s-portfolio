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
    sr.reveal('.xLleft', {
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
    //kv
    sr.reveal('.reveal_bottom_01', {
        origin:'bottom',
        delay: 200
    });
    sr.reveal('.reveal_bottom_02', {
        origin:'bottom',
        delay: 300
    });
    sr.reveal('.reveal_bottom_03', {
        origin:'bottom',
        delay: 400
    });
    sr.reveal('.reveal_bottom_04', {
        origin:'bottom',
        delay: 500
    });
    sr.reveal('.reveal_bottom_05', {
        origin:'bottom',
        delay: 600
    });
    sr.reveal('.reveal_bottom_06', {
        origin:'bottom',
        delay: 700
    });
    sr.reveal('.reveal_bottom_07', {
        origin:'bottom',
        delay: 800
    });
    sr.reveal('.reveal_bottom_08', {
        origin:'bottom',
        delay: 900
    });
    sr.reveal('.reveal_bottom_09', {
        origin:'bottom',
        delay: 1000
    });
    sr.reveal('.reveal_bottom_10', {
        origin:'bottom',
        delay: 1100
    });
    sr.reveal('.reveal_bottom_11', {
        origin:'bottom',
        delay: 1200
    });
    sr.reveal('.reveal_bottom_12', {
        origin:'bottom',
        delay: 1200
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